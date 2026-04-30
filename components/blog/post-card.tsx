import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";

export type BlogPostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: unknown;
  publishedAt?: string;
};

type PostCardProps = {
  post: BlogPostListItem;
};

export function PostCard({ post }: PostCardProps) {
  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1200).height(900).fit("crop").url()
    : null;

  return (
    <article className="flex h-full flex-col overflow-hidden border border-border bg-white">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[4/3] bg-[#efede7]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {post.publishedAt ? (
          <p className="text-sm text-muted">{formatDate(post.publishedAt)}</p>
        ) : null}
        <h2 className="mt-3 text-xl font-medium leading-tight">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-primary">
            {post.title}
          </Link>
        </h2>
        {post.excerpt ? (
          <p className="mt-4 text-body text-muted">{post.excerpt}</p>
        ) : null}
        <div className="mt-6">
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Read article
          </Link>
        </div>
      </div>
    </article>
  );
}
