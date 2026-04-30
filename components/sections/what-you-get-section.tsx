import Image from "next/image";

import { Container } from "@/components/layout/container";

const deliverables = [
  "Personalized nutrition plan (PDF)",
  "1:1 consultation with expert dietitians",
  "Weekly follow-ups and progress tracking",
  "Direct guidance through calls",
  "Plan adjustments based on results"
];

export function WhatYouGetSection() {
  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
            What You Get
          </p>
          <h2 className="mt-6 text-h2 font-semibold text-balance">
            Everything you need to stay consistent and achieve results.
          </h2>
          <p className="mt-6 max-w-xl text-body text-muted">
            Practical support, structured follow-through, and personalized
            guidance built into every step of the engagement.
          </p>

          <ul className="mt-8 space-y-4">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="text-body text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 overflow-hidden rounded-2xl border border-border bg-white lg:order-2">
          <Image
            src="/images/nutrigetic-deliverables.svg"
            alt="Nutrition consultation materials, meal planning notes, and healthy food items"
            width={960}
            height={1080}
            className="h-auto w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
