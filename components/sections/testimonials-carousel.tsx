"use client"

import React, { useRef } from "react"
import { motion, useInView } from "motion/react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Client since 2024",
    quote: "Nutrigetic transformed my relationship with food. The DNA-based approach gave me clarity I'd never had before. My energy is through the roof.",
    avatar: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    role: "Client since 2023",
    quote: "I've tried every diet. This is the only thing that worked — because it was built for MY body, not a template. Down 12kg and keeping it off.",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Elena Rodriguez",
    role: "Client since 2024",
    quote: "The whole-person approach is real. My nutritionist coordinated with my physio. Everything works together. I feel like they actually care.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "David Park",
    role: "Client since 2023",
    quote: "Weekly check-ins kept me accountable. The plan evolved as I progressed. It's not a set-and-forget thing — they're with you the whole way.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Sarah Okafor",
    role: "Client since 2024",
    quote: "I was skeptical about DNA-based nutrition. But the results speak for themselves. My digestion issues are gone. My sleep improved. Game changer.",
    avatar: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "James Mitchell",
    role: "Client since 2023",
    quote: "The team is world-class. They explained my genetic report in plain English and built a plan that actually fit my busy schedule.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
]

function CarouselRow({
  items,
  direction,
  speed,
  onPause,
  onResume,
}: {
  items: typeof testimonials
  direction: "left" | "right"
  speed: number
  onPause: () => void
  onResume: () => void
}) {
  const doubled = [...items, ...items]

  return (
    <div className="flex overflow-hidden">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        className="flex gap-6 flex-shrink-0"
        onMouseEnter={onPause}
        onMouseLeave={onResume}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex-shrink-0 w-[340px] md:w-[400px]"
          >
            <div className="surface-card p-7 flex flex-col h-full">
              <p className="text-lg md:text-xl text-foreground leading-relaxed flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border/40">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function TestimonialsCarousel() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" })

  const topRow = testimonials.filter((_, i) => i % 2 === 0)
  const bottomRow = testimonials.filter((_, i) => i % 2 === 1)

  return (
    <section className="relative bg-backgroundAlt py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Section heading */}
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-start max-w-2xl"
        >
          <span className="section-kicker">Testimonials</span>
          <h2 className="section-title">Real clients, real results</h2>
          <p className="section-copy">
            Hear from people who transformed their health through science-backed, personalized nutrition.
          </p>
        </motion.div>
      </div>

      {/* Top row */}
      <div className="mb-6">
        <CarouselRow
          items={topRow}
          direction="left"
          speed={35}
          onPause={() => {
            return
          }}
          onResume={() => {
            return
          }}
        />
      </div>

      {/* Bottom row */}
      <div>
        <CarouselRow
          items={bottomRow}
          direction="right"
          speed={40}
          onPause={() => {
            return
          }}
          onResume={() => {
            return
          }}
        />
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-backgroundAlt to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-backgroundAlt pointer-events-none z-10" />
    </section>
  )
}

export default TestimonialsCarousel
