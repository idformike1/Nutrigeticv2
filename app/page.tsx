import { FinalCTASection } from "@/components/sections/final-cta-section";
import { GallerySectionNew } from "@/components/sections/gallery-section-new";
import { CredibilitySection } from "@/components/sections/credibility-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessTabs } from "@/components/sections/process-tabs";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { VerticalTabs } from "@/components/ui/vertical-tabs";
import { ServicesSection } from "@/components/sections/services-section";
import { WhatYouGetSection } from "@/components/sections/what-you-get-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VerticalTabs />
      <ServicesSection />
      <ProcessTabs />
      <WhatYouGetSection />
      <TestimonialsCarousel />
      <GallerySectionNew />
      <CredibilitySection />
      <FinalCTASection />
    </>
  );
}
