"use client"

import React, { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

function FloatingCircle({
  size,
  x,
  y,
  delay,
  duration,
  opacity,
}: {
  size: number
  x: string
  y: string
  delay: number
  duration: number
  opacity: number
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        opacity: 0,
      }}
      animate={{
        opacity: [0, opacity, opacity, 0],
        scale: [0.8, 1, 1, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export function FinalCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative border-t border-border/80 bg-backgroundAlt py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FloatingCircle size={120} x="5%" y="20%" delay={0} duration={8} opacity={0.06} />
        <FloatingCircle size={80} x="90%" y="10%" delay={2} duration={10} opacity={0.05} />
        <FloatingCircle size={200} x="70%" y="70%" delay={4} duration={12} opacity={0.04} />
        <FloatingCircle size={60} x="15%" y="75%" delay={1} duration={9} opacity={0.06} />
        <FloatingCircle size={100} x="50%" y="50%" delay={3} duration={11} opacity={0.03} />
      </div>

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="surface-panel mx-auto max-w-3xl px-8 py-12 text-center md:px-12 md:py-16 relative overflow-hidden"
        >
          {/* Inner subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section-kicker inline-block"
            >
              Ready to transform your health?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-5 text-h2 font-semibold text-balance text-foreground"
            >
              Your DNA holds the blueprint. Let's build a plan that actually works for your body.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 text-body text-muted max-w-lg mx-auto"
            >
              Join clients who have transformed their health through science-backed, personalized nutrition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-10 flex flex-col items-center gap-4"
            >
              <Button
                href={siteConfig.primaryCta.href}
                className="px-8 py-3 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              >
                {siteConfig.primaryCta.label}
              </Button>
              <a
                href={siteConfig.secondaryCta.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-300 underline underline-offset-4"
              >
                Prefer to chat? Message us on WhatsApp →
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 text-xs text-muted/60"
            >
              No commitment. Free initial consultation.
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default FinalCTASection