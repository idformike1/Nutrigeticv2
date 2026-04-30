import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function FinalCTASection() {
  return (
    <section className="border-t border-border/80 bg-backgroundAlt py-20 md:py-24 lg:py-28">
      <Container>
        <div className="surface-panel mx-auto max-w-3xl px-8 py-12 text-center md:px-12 md:py-14">
          <p className="section-kicker">Start Your Nutrition Journey Today</p>
          <h2 className="section-title">
            Get a personalized plan and expert guidance tailored to your goals.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={siteConfig.primaryCta.href}>
              {siteConfig.primaryCta.label}
            </Button>
            <Button href={siteConfig.secondaryCta.href} variant="secondary">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
