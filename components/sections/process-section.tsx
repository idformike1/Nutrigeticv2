import { Container } from "@/components/layout/container";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Discuss your goals and current lifestyle."
  },
  {
    number: "02",
    title: "Assessment",
    description: "We evaluate your body, habits, and requirements."
  },
  {
    number: "03",
    title: "Personalized Plan",
    description: "Receive a custom nutrition plan in PDF format."
  },
  {
    number: "04",
    title: "Weekly Follow-ups",
    description: "Ongoing guidance and adjustments through calls."
  },
  {
    number: "05",
    title: "Achieve Results",
    description: "Progress steadily toward your target goals."
  }
];

export function ProcessSection() {
  return (
    <section className="border-t border-border py-20 md:py-24 lg:py-30">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
            How It Works
          </p>
          <h2 className="mt-6 text-h2 font-semibold text-balance">
            A clear process from consultation to measurable progress.
          </h2>
          <p className="mt-6 max-w-2xl text-body text-muted">
            A simple, guided process designed to help you achieve your
            nutrition goals with clarity and consistency.
          </p>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.number} className="relative">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-white text-sm font-medium text-primary">
                  {step.number}
                </div>
                {index < steps.length - 1 ? (
                  <span
                    className="hidden h-px flex-1 bg-border xl:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
              <p className="mt-3 max-w-[16rem] text-sm leading-7 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
