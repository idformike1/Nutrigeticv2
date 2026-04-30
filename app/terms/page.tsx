import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Terms",
  description: "Review Nutrigetic terms and service information."
};

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24 lg:py-30">
      <Container>
        <PageIntro
          eyebrow="Terms"
          title="Terms and service details for client engagements."
          description="This page provides a clean placeholder for your production terms content."
        />
      </Container>
    </section>
  );
}
