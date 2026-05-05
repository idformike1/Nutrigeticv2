"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Dna, Apple, ClipboardCheck, ChartBar, Users, ChevronDown } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Assessment",
    shortTitle: "Assessment",
    description:
      "We analyze your genetic markers to understand how your body processes nutrients, responds to different foods, and where your unique metabolic strengths and challenges lie.",
    icon: Dna,
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=1000&fit=crop",
    imageAlt: "DNA analysis and genetic testing",
  },
  {
    number: "02",
    title: "Personalized Plan",
    shortTitle: "Planning",
    description:
      "Based on your DNA results, we craft a tailored eating strategy that aligns with your genetic profile, lifestyle, and health goals — no generic templates, ever.",
    icon: Apple,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=1000&fit=crop",
    imageAlt: "Personalized healthy meal plan",
  },
  {
    number: "03",
    title: "Guided Implementation",
    shortTitle: "Implementation",
    description:
      "We walk you through every step of adopting your new plan, with clear guidance, meal suggestions, and practical strategies that fit into your real life.",
    icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop",
    imageAlt: "Nutrition coaching session",
  },
  {
    number: "04",
    title: "Progress Tracking",
    shortTitle: "Tracking",
    description:
      "Regular check-ins and biomarker tracking help us measure what's working and fine-tune your plan as your body adapts and your goals evolve.",
    icon: ChartBar,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop",
    imageAlt: "Health progress tracking dashboard",
  },
  {
    number: "05",
    title: "Ongoing Partnership",
    shortTitle: "Partnership",
    description:
      "Nutrition is a journey, not a destination. We stay with you long-term, adjusting your plan as your life changes and new science emerges.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=1000&fit=crop",
    imageAlt: "Long-term health partnership",
  },
]

export function ProcessTabs() {
  const [activeStep, setActiveStep] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headingRef = useRef(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const activeStepData = steps[activeStep]
  const progressPercent = ((activeStep + 1) / steps.length) * 100

  return (
    <section ref={sectionRef} className="w-full bg-background section-space">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-start max-w-2xl mb-10 md:mb-14"
        >
          <span className="section-kicker">Process</span>
          <h2 className="section-title">How it works</h2>
          <p className="section-copy">
            A clear, science-driven process designed around your unique genetic blueprint — from your first DNA assessment to ongoing, personalized support.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Tabs */}
        <div className="hidden lg:block">
          {/* Tab bar */}
          <div className="relative">
            <div className="flex border-b border-border/50">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "relative flex-1 pb-4 text-left transition-colors duration-300 group",
                    activeStep === index
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary/70 mb-1 block">
                    Step {step.number}
                  </span>
                  <span className="text-sm font-medium block pr-4">
                    {step.shortTitle}
                  </span>

                  {/* Active indicator */}
                  {activeStep === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-border/30 w-full -z-10" />
          </div>

          {/* Content panel */}
          <div className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="grid grid-cols-12 gap-12 items-stretch">
                  {/* Left: Content */}
                  <div className="col-span-7">
                    <div className="flex items-start gap-4">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                        className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center"
                      >
                        <activeStepData.icon size={24} />
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold tabular-nums text-primary/70">
                            {activeStepData.number}
                          </span>
                          <span className="w-px h-4 bg-border/50" />
                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                            Step {activeStep + 1} of {steps.length}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                          {activeStepData.title}
                        </h3>
                        <p className="mt-4 text-body text-muted leading-relaxed max-w-xl">
                          {activeStepData.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="col-span-5 h-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                      className="relative h-full min-h-[520px] rounded-3xl overflow-hidden surface-card"
                    >
                      <img
                        src={activeStepData.image}
                        alt={activeStepData.imageAlt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-10">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-500",
                    index === activeStep
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-muted"
                  )}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Compact stepper */}
        <div className="lg:hidden">
          {/* Active step header with dropdown */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-full surface-card p-5 flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center text-sm font-semibold tabular-nums">
                {activeStepData.number}
              </div>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
                  Step {activeStep + 1} of {steps.length}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {activeStepData.title}
                </h3>
              </div>
            </div>
            <motion.div
              animate={{ rotate: mobileOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} className="text-muted" />
            </motion.div>
          </button>

          {/* Expanded step list */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-2 surface-card p-2 space-y-1">
                  {steps.map((step, index) => (
                    <button
                      key={step.number}
                      onClick={() => {
                        setActiveStep(index)
                        setMobileOpen(false)
                      }}
                      className={cn(
                        "w-full text-left p-3 rounded-xl flex items-center gap-3 transition-colors duration-200",
                        activeStep === index
                          ? "bg-primary/5 text-foreground"
                          : "text-muted hover:bg-muted/10"
                      )}
                    >
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold tabular-nums transition-colors",
                          activeStep === index
                            ? "bg-primary text-background"
                            : "bg-muted/20 text-muted"
                        )}
                      >
                        {step.number}
                      </div>
                      <span className="text-sm font-medium">{step.title}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active step content (mobile) */}
          <div className="mt-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <activeStepData.icon size={18} />
              </div>
              <p className="text-body text-muted leading-relaxed">
                {activeStepData.description}
              </p>
            </div>

            {/* Mobile image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden surface-card">
              <img
                src={activeStepData.image}
                alt={activeStepData.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTabs
