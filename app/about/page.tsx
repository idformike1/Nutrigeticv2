import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the philosophy behind the nutrigenetic nutrition practice."
};

export default function AboutPage() {
  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container>
        <PageIntro
          eyebrow="About"
          title="A premium nutrition practice grounded in interpretation and restraint."
          description="The service model is built for people who want thoughtful recommendations instead of generic wellness noise."
        />
        <div className="mt-14 max-w-4xl space-y-8 text-body text-muted">
          <p>
            Nutrigenetic consulting works best when complex biological inputs are
            translated into a clear and practical nutrition framework. The aim is
            not to generate more data, but to improve decision quality.
          </p>
          <p>
            This foundation site emphasizes credibility, calm presentation, and a
            strong consultation-led structure suitable for a high-end practice.
          </p>
        </div>
      </Container>
    </section>
  );
}
