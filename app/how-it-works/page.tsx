import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";

const steps = [
  {
    number: "01",
    title: "Intake and context review",
    description:
      "Gather health priorities, current routines, and any existing genetic or lab information."
  },
  {
    number: "02",
    title: "Interpretation and synthesis",
    description:
      "Review relevant nutrigenetic markers and translate them into nutrition-specific implications."
  },
  {
    number: "03",
    title: "Consultation and plan delivery",
    description:
      "Present a practical strategy with prioritized next steps and implementation guidance."
  }
];

export const metadata: Metadata = {
  title: "How It Works",
  description: "Understand the structured nutrigenetic consultation process."
};

export default function HowItWorksPage() {
  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container>
        <PageIntro
          eyebrow="Process"
          title="A structured path from data to meaningful nutrition decisions."
          description="The workflow is designed to stay measured, interpretable, and easy to act on."
        />
        <div className="mt-14 grid gap-6">
          {steps.map((step) => (
            <article
              key={step.number}
              className="grid gap-4 border border-border bg-white p-8 md:grid-cols-[120px_1fr]"
            >
              <p className="text-sm font-medium tracking-[0.2em] text-primary">
                {step.number}
              </p>
              <div>
                <h2 className="text-h3 font-medium">{step.title}</h2>
                <p className="mt-4 max-w-3xl text-body text-muted">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
