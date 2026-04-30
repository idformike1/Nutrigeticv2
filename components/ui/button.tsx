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
    "inline-flex items-center justify-center whitespace-nowrap rounded-md border px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary"
      ? "border-primary bg-primary text-white hover:bg-[#183122]"
      : "border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
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
