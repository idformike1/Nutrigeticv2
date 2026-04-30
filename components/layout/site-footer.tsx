import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navigation, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-[#efede7]">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div className="max-w-sm">
            <p className="text-base font-semibold tracking-[-0.02em] text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Premium nutrigenetic nutrition guidance designed for clear,
              consultation-led decision making.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              Company
            </p>
            <nav className="mt-5 flex flex-col gap-3 text-sm text-muted">
              {navigation.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              Resources
            </p>
            <nav className="mt-5 flex flex-col gap-3 text-sm text-muted">
              {navigation.slice(3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              Contact
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-muted">
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
              <a href={siteConfig.whatsapp} className="transition-colors hover:text-foreground">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
