import { type SanityImageSource } from "@sanity/image-url";

import { urlForImage } from "@/lib/sanity";

export const urlFor = (source: SanityImageSource) => urlForImage(source);
