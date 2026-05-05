"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

const trustIndicators = [
  "Personalized Plans",
  "Weekly Follow-ups",
  "Expert Team Support"
]

const slideContainer = {
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
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-border/80 py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-18">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideContainer}
          style={{ y: textY }}
          className="max-w-2xl"
        >
          <motion.p variants={slideItem} className="section-kicker">
            Nutrigenetic Nutrition Service
          </motion.p>
          <motion.h1
            variants={slideItem}
            className="mt-5 max-w-xl text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.045em] text-balance text-foreground md:text-[3.25rem] lg:text-[3.5rem]"
          >
            Personalized Nutrition for Performance &amp; Health
          </motion.h1>
          <motion.p variants={slideItem} className="mt-6 max-w-xl text-body text-muted">
            Work 1:1 with expert dietitians to get a custom nutrition plan,
            weekly follow-ups, and guided support until you reach your goals.
          </motion.p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.div variants={slideItem}>
              <Button href={siteConfig.primaryCta.href}>
                {siteConfig.primaryCta.label}
              </Button>
            </motion.div>
            <motion.div variants={slideItem}>
              <Button href={siteConfig.secondaryCta.href} variant="secondary">
                Chat on WhatsApp
              </Button>
            </motion.div>
          </div>

          <motion.ul
            variants={slideContainer}
            className="mt-9 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-3"
          >
            {trustIndicators.map((item) => (
              <motion.li
                key={item}
                variants={slideItem}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/75 px-3.5 py-2 shadow-soft"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span className="font-medium text-foreground/80">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ y: imageY }}
          className="surface-panel relative overflow-hidden"
        >
          <Image
            src="/images/nutrigetic-hero.svg"
            alt="Dietitian consultation setup with healthy meal planning elements"
            width={960}
            height={1080}
            className="h-auto w-full object-cover"
            priority
          />
        </motion.div>
      </Container>
    </section>
  )
}

export default HeroSection
