
"use client"

import React, { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Container } from "@/components/layout/container"

const stats = [
    { value: 500, suffix: "+", label: "DNA Reports Analyzed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 12, suffix: "+", label: "Years of Expertise" },
    { value: 1000, suffix: "+", label: "Personalized Plans Delivered" },
]

function AnimatedCounter({
    value,
    suffix,
    label,
    index,
}: {
    value: number
    suffix: string
    label: string
    index: number
}) {
    const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10px" })
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!isInView) return
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let step = 0
        const timer = setInterval(() => {
            step++
            setCount(Math.min(Math.round(increment * step), value))
            if (step >= steps) clearInterval(timer)
        }, duration / steps)
        return () => clearInterval(timer)
    }, [isInView, value])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
        >
            <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tabular-nums tracking-tight">
                    {count}
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tracking-tight">
                    {suffix}
                </span>
            </div>
            <p className="mt-2 text-sm text-muted font-medium">{label}</p>
        </motion.div>
    )
}

const logos = [
    { name: "American Society for Nutrition", initials: "ASN" },
    { name: "Academy of Nutrition and Dietetics", initials: "AND" },
    { name: "International Society of Nutrigenetics", initials: "ISNN" },
    { name: "Precision Medicine Initiative", initials: "PMI" },
    { name: "Harvard Health Publishing", initials: "HHP" },
]

export function CredibilitySection() {
    const logoRef = useRef<HTMLDivElement>(null)
    const logosInView = useInView(logoRef, { once: true, margin: "-60px" })

    return (
        <section className="border-y border-border/80 bg-backgroundAlt/50">
            <Container className="py-14 md:py-18">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <AnimatedCounter
                            key={stat.label}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            index={index}
                        />
                    ))}
                </div>

                {/* Logo row */}
                <div className="mt-12 pt-10 border-t border-border/40">
                    <motion.p
                        ref={logoRef}
                        initial={{ opacity: 0, y: 10 }}
                        animate={logosInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-muted mb-6"
                    >
                        Trusted by leading nutrition organizations
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={logosInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
                    >
                        {logos.map((logo) => (
                            <div
                                key={logo.initials}
                                className="flex items-center gap-2 text-muted/60 hover:text-muted transition-colors duration-300"
                            >
                                <div className="w-8 h-8 rounded-lg bg-muted/20 flex items-center justify-center">
                                    <span className="text-[10px] font-bold text-muted/50 tracking-tight">
                                        {logo.initials}
                                    </span>
                                </div>
                                <span className="text-xs font-medium hidden sm:block">{logo.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default CredibilitySection
