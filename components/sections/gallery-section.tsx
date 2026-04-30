import Image from "next/image";

import { Container } from "@/components/layout/container";
import type { GalleryItem } from "@/lib/home";

type GallerySectionProps = {
  items: GalleryItem[];
};

export function GallerySection({ items }: GallerySectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
            Our Work &amp; Community
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.src}
              className="overflow-hidden rounded-2xl border border-border bg-white"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={960}
                className="aspect-[4/5] h-auto w-full object-cover transition-transform hover:scale-[1.01]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
