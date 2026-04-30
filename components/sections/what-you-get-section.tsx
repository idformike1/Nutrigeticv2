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
    <section className="section-space">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-18">
        <div className="order-2 lg:order-1">
          <p className="section-kicker">What You Get</p>
          <h2 className="section-title">
            Everything you need to stay consistent and achieve results.
          </h2>
          <p className="section-copy max-w-xl">
            Practical support, structured follow-through, and personalized
            guidance built into every step of the engagement.
          </p>

          <ul className="mt-8 space-y-4">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-white/70 px-4 py-4 shadow-soft"
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="text-body text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-panel order-1 overflow-hidden lg:order-2">
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
