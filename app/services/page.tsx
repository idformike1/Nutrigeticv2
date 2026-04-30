import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";

const services = [
  "Nutrigenetic result interpretation",
  "Dietary pattern and nutrient strategy review",
  "Supplement and lifestyle alignment guidance",
  "Follow-up consultation planning"
];

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the consultation-led nutrigenetic services available."
};

export default function ServicesPage() {
  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container>
        <PageIntro
          eyebrow="Services"
          title="A focused service model built around expert interpretation."
          description="The offer structure stays intentionally narrow so the client experience remains precise, calm, and deeply personalized."
        />
        <div className="mt-14 grid gap-4">
          {services.map((service) => (
            <div key={service} className="border border-border bg-white px-6 py-6">
              <p className="text-lg font-medium">{service}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
