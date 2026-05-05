"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/container"
import {
  FileText,
  CalendarCheck,
  MessageCircle,
  PhoneCall,
  TrendingUp,
} from "lucide-react"

const deliverables = [
  {
    title: "Personalized Nutrition Plan",
    description: "A detailed PDF tailored to your DNA, lifestyle, and goals.",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "1:1 Expert Consultation",
    description: "Deep-dive sessions with registered dietitians who understand your genetic profile.",
    icon: CalendarCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Weekly Progress Tracking",
    description: "Regular check-ins, biomarker reviews, and data-driven adjustments.",
    icon: TrendingUp,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Direct Messaging Access",
    description: "WhatsApp and in-app messaging for quick questions between sessions.",
    icon: MessageCircle,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "Ongoing Plan Refinement",
    description: "Your plan evolves as your body adapts — never static, always optimizing.",
    icon: PhoneCall,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
]

const previewCards = [
  {
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=800&fit=crop",
    alt: "DNA nutrition report",
    label: "Your Personalized Report",
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
    alt: "Consultation session",
    label: "1:1 Expert Sessions",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop",
    alt: "Progress dashboard",
    label: "Progress Dashboard",
  },
]

function DeliverableItem({
  item,
  index,
  onActivate,
}: {
  item: (typeof deliverables)[0]
  index: number
  onActivate: () => void
}) {
  const ref = useRef<HTMLLIElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10px" })

  useEffect(() => {
    if (isInView) onActivate()
  }, [isInView, onActivate])

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.9,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex items-start gap-4 rounded-2xl border border-border/50 bg-white/50 p-5 transition-all duration-500 hover:border-primary/20 hover:bg-primary/[0.02]"
    >
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2 + 0.3,
          type: "spring",
          stiffness: 160,
          damping: 14,
        }}
        className={cn(
          "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
          item.bg
        )}
      >
        <item.icon size={18} className={item.color} />
      </motion.div>
      <div>
        <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
        <p className="mt-1 text-sm text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.li>
  )
}

export function WhatYouGetSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previewIndex, setPreviewIndex] = useState(0)

  const handleActivate = (index: number) => {
    setActiveIndex((prev) => Math.max(prev, index))
    setPreviewIndex(Math.min(index, previewCards.length - 1))
  }

  const currentPreview = previewCards[previewIndex]

  return (
    <section className="section-space">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-18">
        {/* Left: Preview image (flipped — now on left) */}
        <div className="order-1">
          <div className="sticky top-24">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden surface-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={previewIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={currentPreview.image}
                    alt={currentPreview.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      Included
                    </span>
                    <p className="mt-1 text-lg font-semibold text-foreground">
                      {currentPreview.label}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {previewCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPreviewIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-500",
                    index === previewIndex
                      ? "bg-primary w-6"
                      : "bg-border hover:bg-muted"
                  )}
                  aria-label={`Preview ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Checklist (flipped — now on right) */}
        <div className="order-2">
          <p className="section-kicker">What You Get</p>
          <h2 className="section-title">
            Everything you need to stay consistent and achieve results.
          </h2>
          <p className="section-copy max-w-xl">
            Practical support, structured follow-through, and personalized
            guidance built into every step of the engagement.
          </p>

          <ul className="mt-8 space-y-3">
            {deliverables.map((item, index) => (
              <DeliverableItem
                key={item.title}
                item={item}
                index={index}
                onActivate={() => handleActivate(index)}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default WhatYouGetSection
