"use client";
import React from "react";
import { Button } from "@/components/design-system/Button";
import { Shield, Users, Award, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="hero-bg absolute inset-0" />

        {/* Floating background elements */}
        <div className="blob blob-pink absolute top-20 left-10 w-32 h-32 animate-pulse" />
        <div className="blob blob-turquoise absolute top-40 right-16 w-24 h-24 animate-pulse anim-delay-1000" />
        <div className="blob blob-purple absolute bottom-32 left-20 w-40 h-40 blur-3xl animate-pulse anim-delay-2000" />
        <div className="blob blob-turquoise absolute bottom-20 right-32 w-28 h-28 animate-pulse anim-delay-500" />

        <div className="content-max-width text-center relative z-10 transition-all duration-1000 opacity-100 translate-y-0">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="gradient-text block">Digital. Persönlich.</span>
            <span className="gradient-text block">Ohne Quatsch.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed text-[color:var(--color-text-light)]/90">
            Ehrliche Beratung für Internet, Mobilfunk, Strom, Gas & Kredite – ohne versteckte Kosten.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button size="xl" href="#offers" className="min-w-[280px]">
              Angebote entdecken
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button variant="secondary" size="xl" href="#top-berater" className="min-w-[280px]">
              Berater finden
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[color:var(--color-text-light)]/70">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[color:var(--color-accent-turquoise)]" />
              <span>100% transparent</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[color:var(--color-accent-pink)]" />
              <span>5000+ zufriedene Kunden</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[color:var(--color-premium-gold)]" />
              <span>Bestpreis-Garantie</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
