import { Container } from "@/components/layout/container";

const credibilityItems = [
  "Personalized Plans",
  "Weekly Follow-ups",
  "Expert Team Support",
  "Performance & General Goals"
];

export function CredibilityStrip() {
  return (
    <section className="border-b border-border/80 py-10 md:py-12">
      <Container>
        <ul className="grid gap-x-6 gap-y-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {credibilityItems.map((item) => (
            <li
              key={item}
              className="flex items-center justify-center gap-3 rounded-2xl border border-border/70 bg-white/70 px-4 py-4 text-sm shadow-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span className="font-medium text-foreground/84">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
