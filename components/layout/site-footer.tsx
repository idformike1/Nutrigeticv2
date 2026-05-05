"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "motion/react"
import { Container } from "@/components/layout/container"
import { navigation, siteConfig } from "@/lib/site"
import { Phone, Mail, MessageCircle, ArrowUp, Sprout } from "lucide-react"

const companyLinks = navigation.slice(0, 3)
const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
]

const contactItems = [
  { icon: Phone, label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` },
  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MessageCircle, label: "WhatsApp", href: siteConfig.whatsapp },
]

export function SiteFooter() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
    },
  }

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mt-20 border-t border-border/80 bg-backgroundAlt"
    >
      <Container className="py-18">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-12">
          {/* Brand */}
          <motion.div variants={childVariants} className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Sprout size={18} />
              </div>
              <p className="text-base font-semibold tracking-[-0.02em] text-foreground">
                {siteConfig.name}
              </p>
            </div>
            <p className="text-sm leading-7 text-muted">
              Premium nutrigenetic nutrition guidance designed for clear, consultation-led decision making.
            </p>
          </motion.div>

          {/* Company */}
          <motion.div variants={childVariants}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              Company
            </p>
            <nav className="mt-5 flex flex-col gap-3.5 text-sm text-muted">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative inline-block w-fit transition-colors hover:text-foreground group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Resources */}
          <motion.div variants={childVariants}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              Resources
            </p>
            <nav className="mt-5 flex flex-col gap-3.5 text-sm text-muted">
              {resourceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative inline-block w-fit transition-colors hover:text-foreground group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={childVariants}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              Contact
            </p>
            <div className="mt-5 flex flex-col gap-4 text-sm text-muted">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 transition-colors hover:text-foreground group"
                >
                  <item.icon size={15} className="text-muted/60 group-hover:text-primary transition-colors" />
                  <span className="relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={childVariants}
          className="mt-12 flex flex-col gap-4 border-t border-border/80 pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between"
        >
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 transition-colors hover:text-foreground group"
            >
              Back to top
              <ArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </motion.div>
      </Container>
    </motion.footer>
  )
}

export default SiteFooter