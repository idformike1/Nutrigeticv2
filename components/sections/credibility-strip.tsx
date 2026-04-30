import { Container } from "@/components/layout/container";

const credibilityItems = [
  "Personalized Plans",
  "Weekly Follow-ups",
  "Expert Team Support",
  "Performance & General Goals"
];

export function CredibilityStrip() {
  return (
    <section className="border-b border-border py-8 md:py-10">
      <Container>
        <ul className="grid gap-x-8 gap-y-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {credibilityItems.map((item) => (
            <li key={item} className="flex items-center justify-center gap-3 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span className="font-medium text-foreground/84">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
