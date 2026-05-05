"use client"

import React, { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Container } from "@/components/layout/container"
import { Dna, HeartHandshake, Users } from "lucide-react"

const differentiators = [
  {
    title: "DNA-Based, Not Guesswork",
    description:
      "Your genetic blueprint guides every recommendation. No cookie-cutter meal plans — just precise, personalized nutrition built from your unique biomarkers.",
    icon: Dna,
  },
  {
    title: "Ongoing Support, Not One-Off Advice",
    description:
      "Weekly check-ins, real-time adjustments, and long-term accountability. We stay with you as your body adapts and your goals evolve.",
    icon: HeartHandshake,
  },
  {
    title: "Whole-Person Approach",
    description:
      "Access to nutritionists, psychologists, and physiotherapists under one roof. Your nutrition plan works in harmony with your mental and physical wellbeing.",
    icon: Users,
  },
]

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const slideItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

function DifferentiatorCard({
  item,
  index,
}: {
  item: (typeof differentiators)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-20px" })

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideItem}
      transition={{
        duration: 1.0,
        delay: index * 0.25,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="surface-card flex flex-col p-8 md:p-9 min-h-0 group hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-500"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.25 + 0.3,
          type: "spring",
          stiffness: 180,
          damping: 16,
        }}
        className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
      >
        <item.icon size={30} />
      </motion.div>
      <h3 className="text-h3 font-medium text-foreground">
        {item.title}
      </h3>
      <p className="mt-4 text-body text-muted leading-relaxed">
        {item.description}
      </p>
    </motion.article>
  )
}

export function ServicesSection() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" })

  return (
    <section className="section-space">
      <Container>
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.p variants={slideItem} className="section-kicker">
            Why Nutrigetic
          </motion.p>
          <motion.h2 variants={slideItem} className="section-title">
            Science-backed nutrition that's built for you, not the masses.
          </motion.h2>
          <motion.p variants={slideItem} className="section-copy">
            Three reasons why our approach delivers results that generic diet plans can't.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <DifferentiatorCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
