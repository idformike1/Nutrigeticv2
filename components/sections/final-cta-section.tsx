import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function FinalCTASection() {
  return (
    <section className="border-t border-border bg-[#f1efe8] py-20 md:py-24 lg:py-30">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
            Start Your Nutrition Journey Today
          </p>
          <h2 className="mt-6 text-h2 font-semibold text-balance">
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
