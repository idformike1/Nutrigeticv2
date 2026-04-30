import { Container } from "@/components/layout/container";
import type { Testimonial } from "@/lib/home";

type TestimonialsSectionProps = {
  items: Testimonial[];
};

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="section-space border-t border-border/80">
      <Container>
        <div className="max-w-3xl">
          <p className="section-kicker">What Our Clients Say</p>
          <h2 className="section-title">
            Trust built through measurable, consistent support.
          </h2>
          <p className="section-copy">Real results from real clients.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={`${item.name}-${item.quote}`}
              className="surface-card p-8 md:p-9"
            >
              <p className="text-body text-foreground">{item.quote}</p>
              <div className="mt-8">
                <p className="text-base font-semibold tracking-[-0.01em]">{item.name}</p>
                {item.context ? (
                  <p className="mt-1 text-sm text-muted">{item.context}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
