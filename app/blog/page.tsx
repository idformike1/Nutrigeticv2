import type { Metadata } from "next";

import { PostCard, type BlogPostListItem } from "@/components/blog/post-card";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";
import { getAllPosts } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Blog",
  description: "Editorial space for articles on nutrigenetics and personalized nutrition."
};

export default async function BlogPage() {
  const posts = await sanityClient.fetch<BlogPostListItem[]>(getAllPosts);

  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container>
        <PageIntro
          eyebrow="Journal"
          title="A quiet editorial layer for long-form education and perspective."
          description="The blog structure is intentionally restrained to support credible publishing without distracting from the service offer."
        />
        {posts.length > 0 ? (
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="mt-14 border border-border bg-white p-8">
            <p className="text-body text-muted">
              No articles have been published yet.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
