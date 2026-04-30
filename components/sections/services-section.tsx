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
    <section className="section-space">
      <Container>
        <div className="max-w-3xl">
          <p className="section-kicker">Our Services</p>
          <h2 className="section-title">
            Structured support for performance, health, and long-term progress.
          </h2>
          <p className="section-copy">
            Personalized nutrition solutions designed for performance, health,
            and long-term results.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="surface-card flex h-full flex-col justify-between p-8 md:p-9"
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
