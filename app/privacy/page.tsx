import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Review Nutrigetic privacy information."
};

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container>
        <PageIntro
          eyebrow="Privacy"
          title="Privacy information for prospective and current clients."
          description="This page provides a clean placeholder for your production privacy policy content."
        />
      </Container>
    </section>
  );
}
