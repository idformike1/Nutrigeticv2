"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 shadow-[0_1px_0_rgba(17,17,17,0.03)] backdrop-blur-md">
      <Container className="flex min-h-[72px] items-center justify-between gap-4">
        <div className="flex items-center gap-10 lg:gap-14">
          <Link href="/" className="shrink-0 text-[1.02rem] font-semibold tracking-[-0.03em]">
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "border-b border-transparent pb-1 text-sm font-medium text-muted transition-colors hover:text-foreground",
                    isActive && "border-primary text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <Button
              href={siteConfig.secondaryCta.href}
              variant="secondary"
              className="px-4 py-2.5"
            >
              {siteConfig.secondaryCta.label}
            </Button>
            <Button href={siteConfig.primaryCta.href} className="px-5 py-2.5">
              {siteConfig.primaryCta.label}
            </Button>
          </div>

          <Button
            href={siteConfig.primaryCta.href}
            className="px-4 py-2.5 text-xs sm:text-sm md:hidden"
          >
            Book Consultation
          </Button>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/90 bg-white/80 text-foreground transition-colors hover:border-primary/45 lg:hidden"
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span
                className={cn(
                  "block h-px w-full bg-current transition-transform",
                  isOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-px w-full bg-current transition-opacity",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-px w-full bg-current transition-transform",
                  isOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div className="border-t border-border/80 bg-background lg:hidden">
          <Container className="py-5">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-white hover:text-foreground",
                      isActive && "bg-white text-foreground shadow-soft"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row">
              <Button href={siteConfig.secondaryCta.href} variant="secondary" className="w-full">
                {siteConfig.secondaryCta.label}
              </Button>
              <Button href={siteConfig.primaryCta.href} className="w-full">
                {siteConfig.primaryCta.label}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
