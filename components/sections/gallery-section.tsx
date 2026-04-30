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
    <section className="section-space">
      <Container>
        <div className="max-w-3xl">
          <p className="section-kicker">Our Work &amp; Community</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.src}
              className="surface-card overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={960}
                className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
