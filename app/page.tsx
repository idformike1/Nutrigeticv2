import { FinalCTASection } from "@/components/sections/final-cta-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhatYouGetSection } from "@/components/sections/what-you-get-section";
import { galleryItems, testimonials } from "@/lib/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <ServicesSection />
      <ProcessSection />
      <WhatYouGetSection />
      <TestimonialsSection items={testimonials} />
      <GallerySection items={galleryItems} />
      <FinalCTASection />
    </>
  );
}
