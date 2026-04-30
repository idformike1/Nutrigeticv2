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
    <section className="border-t border-border py-20 md:py-24 lg:py-30">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
            What Our Clients Say
          </p>
          <h2 className="mt-6 text-h2 font-semibold text-balance">
            Trust built through measurable, consistent support.
          </h2>
          <p className="mt-6 text-body text-muted">Real results from real clients.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article key={`${item.name}-${item.quote}`} className="border border-border bg-white p-8">
              <p className="text-body text-foreground">{item.quote}</p>
              <div className="mt-8">
                <p className="text-base font-medium">{item.name}</p>
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
