import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const trustIndicators = [
  "Personalized Plans",
  "Weekly Follow-ups",
  "Expert Team Support"
];

export function HeroSection() {
  return (
    <section className="border-b border-border py-16 md:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
            Nutrigenetic Nutrition Service
          </p>
          <h1 className="mt-6 max-w-xl text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.04em] text-balance text-foreground md:text-[3rem]">
            Personalized Nutrition for Performance &amp; Health
          </h1>
          <p className="mt-6 max-w-xl text-body text-muted">
            Work 1:1 with expert dietitians to get a custom nutrition plan,
            weekly follow-ups, and guided support until you reach your goals.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.primaryCta.href}>
              {siteConfig.primaryCta.label}
            </Button>
            <Button href={siteConfig.secondaryCta.href} variant="secondary">
              Chat on WhatsApp
            </Button>
          </div>

          <ul className="mt-8 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
            {trustIndicators.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-white">
          <Image
            src="/images/nutrigetic-hero.svg"
            alt="Dietitian consultation setup with healthy meal planning elements"
            width={960}
            height={1080}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
