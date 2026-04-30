import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  className,
  href,
  variant = "primary"
}: ButtonProps) {
  const styles = cn(
    "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl border px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary"
      ? "border-primary bg-primary text-white shadow-soft hover:bg-[#183122] hover:shadow-card"
      : "border-border/90 bg-white/80 text-foreground hover:border-primary/45 hover:bg-white hover:text-primary",
    className
  );

  if (href) {
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
      return (
        <a href={href} className={styles}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles}>
      {children}
    </button>
  );
}
