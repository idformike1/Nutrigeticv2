import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Performance Nutrition",
    description:
      "For athletes and active individuals looking to optimize performance, recovery, and endurance."
  },
  {
    title: "General Nutrition",
    description:
      "For fat loss, health improvement, and building sustainable nutrition habits."
  },
  {
    title: "Integrated Support",
    description:
      "Access to nutritionists, psychologists, and physiotherapists for complete support."
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
            Our Services
          </p>
          <h2 className="mt-6 text-h2 font-semibold text-balance">
            Structured support for performance, health, and long-term progress.
          </h2>
          <p className="mt-6 max-w-2xl text-body text-muted">
            Personalized nutrition solutions designed for performance, health,
            and long-term results.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col justify-between border border-border bg-white p-8"
            >
              <div>
                <h3 className="text-h3 font-medium">{service.title}</h3>
                <p className="mt-4 max-w-sm text-body text-muted">
                  {service.description}
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
                  Book Consultation
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
