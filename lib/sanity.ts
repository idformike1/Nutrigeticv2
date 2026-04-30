const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

if (!projectId) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!dataset) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SANITY_DATASET");
}

type SanityFetchClient = {
  fetch<T>(query: string, params?: Record<string, unknown>): Promise<T>;
};

type ImageBuilderResult = {
  width(value: number): ImageBuilderResult;
  height(value: number): ImageBuilderResult;
  fit(value: string): ImageBuilderResult;
  url(): string;
};

type ImageBuilder = {
  image(source: unknown): ImageBuilderResult;
};

function createFallbackClient(): SanityFetchClient {
  return {
    async fetch<T>(query: string) {
      if (query.includes("[0]")) {
        return null as T;
      }

      return [] as T;
    }
  };
}

function createFallbackImageBuilder(): ImageBuilder {
  const chain: ImageBuilderResult = {
    width: () => chain,
    height: () => chain,
    fit: () => chain,
    url: () => ""
  };

  return {
    image: () => chain
  };
}

function loadSanityClient(): SanityFetchClient {
  try {
    const { createClient } = eval("require")("next-sanity") as {
      createClient: (config: {
        projectId: string;
        dataset: string;
        apiVersion: string;
        useCdn: boolean;
      }) => SanityFetchClient;
    };

    return createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true
    });
  } catch {
    return createFallbackClient();
  }
}

function loadImageBuilder(): ImageBuilder {
  try {
    const { default: imageUrlBuilder } = eval("require")("@sanity/image-url") as {
      default: (config: { projectId: string; dataset: string }) => ImageBuilder;
    };

    return imageUrlBuilder({
      projectId,
      dataset
    });
  } catch {
    return createFallbackImageBuilder();
  }
}

export const sanityClient = loadSanityClient();
export const imageUrlBuilderHelper = loadImageBuilder();

export function urlForImage(source: unknown) {
  return imageUrlBuilderHelper.image(source);
}
