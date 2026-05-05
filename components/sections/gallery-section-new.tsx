
"use client"

import React, { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/container"
import { X } from "lucide-react"

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=600&fit=crop", alt: "Fresh nutritious meal preparation", span: "" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop", alt: "Nutrition coach consultation", span: "md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop", alt: "Fresh organic ingredients", span: "" },
  { src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=600&fit=crop", alt: "Healthy balanced meal bowl", span: "" },
  { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=800&fit=crop", alt: "Colorful fresh vegetable salad", span: "md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=600&h=600&fit=crop", alt: "Fresh fruits and berries", span: "" },
  { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=600&fit=crop", alt: "DNA and nutrition science", span: "" },
  { src: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&h=600&fit=crop", alt: "Healthy cooking preparation", span: "" },
]

function GalleryImage({
  item,
  index,
  onClick,
}: {
  item: (typeof galleryItems)[0]
  index: number
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer surface-card",
        item.span
      )}
      onClick={onClick}
    >
      <div className="relative w-full h-full min-h-[200px]">
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <p className="text-white text-sm font-medium leading-snug">{item.alt}</p>
        </div>
      </div>
    </motion.div>
  )
}

function Lightbox({
  item,
  onClose,
}: {
  item: (typeof galleryItems)[0] | null
  onClose: () => void
}) {
  if (!item) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={20} />
      </button>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="relative max-w-4xl max-h-[85vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-contain rounded-2xl"
        />
        <p className="text-white/80 text-sm mt-4 text-center">{item.alt}</p>
      </motion.div>
    </motion.div>
  )
}

export function GallerySectionNew() {
  const [lightboxItem, setLightboxItem] = useState<(typeof galleryItems)[0] | null>(null)
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" })

  return (
    <>
      <section className="section-space">
        <Container>
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-start max-w-2xl mb-12 md:mb-16"
          >
            <span className="section-kicker">Gallery</span>
            <h2 className="section-title">A glimpse into our world</h2>
            <p className="section-copy">
              Real moments from our consultations, meal plans, and the vibrant nutrition journey our clients experience every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px]">
            {galleryItems.map((item, index) => (
              <GalleryImage
                key={item.alt}
                item={item}
                index={index}
                onClick={() => setLightboxItem(item)}
              />
            ))}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default GallerySectionNew
