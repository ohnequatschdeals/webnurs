"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated" | "outline";
  glow?: "none" | "pink" | "turquoise" | "auto";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", glow = "auto", padding = "md", children, ...props }, ref) => {
    const baseClasses = `
      relative rounded-2xl
      transition-all duration-300 ease-out
      hover:scale-[1.02]
    `;

    const variants = {
      default: `
        bg-gradient-to-br from-[#1A0E23]/60 to-[#0E0F1A]/80
        border border-[#D8D8D8]/10
        backdrop-blur-sm
      `,
      glass: `
        bg-[#1A0E23]/30
        backdrop-blur-xl
        border border-[#D8D8D8]/10
      `,
      elevated: `
        bg-gradient-to-br from-[#1A0E23] to-[#0E0F1A]
        border border-[#D8D8D8]/20
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
      `,
      outline: `
        bg-transparent
        border-2 border-[#D8D8D8]/20
        backdrop-blur-sm
      `,
    } as const;

    const glowEffects = {
      none: "",
      pink: "shadow-[0_0_20px_rgba(255,63,135,0.2)] hover:shadow-[0_0_30px_rgba(255,63,135,0.3)]",
      turquoise: "shadow-[0_0_20px_rgba(0,208,192,0.2)] hover:shadow-[0_0_30px_rgba(0,208,192,0.3)]",
      auto: "shadow-[0_0_20px_rgba(255,63,135,0.1),0_0_20px_rgba(0,208,192,0.1)] hover:shadow-[0_0_30px_rgba(255,63,135,0.2),0_0_30px_rgba(0,208,192,0.2)]",
    } as const;

    const paddings = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-12",
    } as const;

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variants[variant], glowEffects[glow], paddings[padding], className)}
        {...props}
      >
        {children}
        {/* Subtle inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#FF3F87]/5 via-transparent to-[#00D0C0]/5" />
      </div>
    );
  }
);
Card.displayName = "Card";

interface SlotProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, SlotProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-2 pb-4 border-b border-[#D8D8D8]/10", className)} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef<HTMLDivElement, SlotProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("pt-4", className)} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, SlotProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center pt-4 border-t border-[#D8D8D8]/10", className)} {...props}>
      {children}
    </div>
  )
);
CardFooter.displayName = "CardFooter";
