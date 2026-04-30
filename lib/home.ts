export type Testimonial = {
  quote: string;
  name: string;
  context?: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
};

export const testimonials: Testimonial[] = [];

export const galleryItems: GalleryItem[] = [];
