import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a nutrigenetic nutrition consultation."
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container>
        <PageIntro
          eyebrow="Contact"
          title="Begin with a direct consultation inquiry."
          description="Use this page as the initial contact point for prospective clients seeking a tailored nutrigenetic nutrition strategy."
        />
        <div className="mt-14 max-w-3xl border border-border bg-white p-8 md:p-10">
          <div className="space-y-6 text-body text-muted">
            <p>Email inquiries can be routed through a private intake workflow.</p>
            <p>
              This starter build keeps the contact experience intentionally clean
              and ready for integration with your preferred booking or form system.
            </p>
          </div>
          <div className="mt-10">
            <Button href="mailto:hello@nutrigetic.com">hello@nutrigetic.com</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
