import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { RichText } from "@/components/blog/rich-text";
import { Container } from "@/components/layout/container";
import { getAllPosts, getPostBySlug } from "@/lib/queries";
import { sanityClient, urlForImage } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: unknown;
  publishedAt?: string;
  body?: Array<{
    _type?: string;
    style?: string;
    children?: Array<{ _type?: string; text?: string }>;
  }>;
  author?: string;
};

type BlogPostSlug = {
  slug: string;
};

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

async function getPost(slug: string) {
  return sanityClient.fetch<BlogPost | null>(getPostBySlug, { slug });
}

export async function generateStaticParams() {
  const posts = await sanityClient.fetch<BlogPostSlug[]>(getAllPosts);

  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested article could not be found."
    };
  }

  return {
    title: post.title,
    description: post.excerpt || "Nutrigetic blog article."
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1600).height(900).fit("crop").url()
    : null;

  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container>
        <article className="mx-auto max-w-4xl">
          <header className="max-w-3xl">
            {post.publishedAt ? (
              <p className="text-sm text-muted">{formatDate(post.publishedAt)}</p>
            ) : null}
            <h1 className="mt-4 text-h1 font-semibold text-balance">{post.title}</h1>
            {post.excerpt ? (
              <p className="mt-6 text-body text-muted">{post.excerpt}</p>
            ) : null}
            {post.author ? (
              <p className="mt-4 text-sm text-muted">By {post.author}</p>
            ) : null}
          </header>

          {imageUrl ? (
            <div className="relative mt-12 aspect-[16/9] overflow-hidden border border-border bg-white">
              <Image
                src={imageUrl}
                alt={post.title}
                fill
                sizes="(min-width: 1280px) 960px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          {post.body ? <RichText value={post.body} /> : null}
        </article>
      </Container>
    </section>
  );
}
