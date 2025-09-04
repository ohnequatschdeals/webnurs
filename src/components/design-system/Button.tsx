"use client";
import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary";
type Size = "md" | "xl";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type ButtonProps =
  | (CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

const base =
  "inline-flex items-center justify-center rounded-lg font-semibold transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40";
const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  xl: "px-6 py-3 text-base",
};
const variants: Record<Variant, string> = {
  primary:
    "text-white shadow-md",
  secondary:
    "text-black shadow-md",
};

// gradient arka planları style üzerinden DS değişkenleriyle veriyoruz (class ile toggle)
function bgFor(v: Variant) {
  return v === "primary"
    ? { background: "var(--gradient-button-pink)" }
    : { background: "var(--gradient-button-turquoise)" };
}

export function Button(props: ButtonProps) {
  const { children, className = "", variant = "primary", size = "md", href, ...rest } = props as any;
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} style={bgFor(variant)} {...(rest as any)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} style={bgFor(variant)} {...(rest as any)}>
      {children}
    </button>
  );
}
