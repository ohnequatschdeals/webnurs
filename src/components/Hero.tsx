"use client";
import { ArrowRight, Shield, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0" />
        <div className="blob blob-pink absolute top-20 left-10 w-32 h-32 animate-pulse" />
        <div className="blob blob-turquoise absolute top-40 right-16 w-24 h-24 animate-pulse" />
        <div className="blob blob-purple absolute bottom-32 left-20 w-40 h-40 blur-3xl animate-pulse" />
        <div className="blob blob-turquoise absolute bottom-20 right-32 w-28 h-28 animate-pulse" />

        <div className="content-max-width text-center relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="gradient-text block">Digital. Persönlich.</span>
            <span className="gradient-text block">Ohne Quatsch.</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed text-[color:var(--color-text-light)]/90">
            Ehrliche Beratung für Internet, Mobilfunk, Strom, Gas & Kredite – ohne versteckte Kosten.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a href="#offers" className="px-6 py-3 rounded-lg text-white font-semibold min-w-[280px]" style={{background:"linear-gradient(135deg,#FF3F87 0%,#A020F0 100%)"}}>
              Angebote entdecken <ArrowRight className="inline ml-3 h-6 w-6" />
            </a>
            <a href="#top-berater" className="px-6 py-3 rounded-lg text-black font-semibold min-w-[280px]" style={{background:"linear-gradient(135deg,#00D0C0 0%,#008B8B 100%)"}}>
              Berater finden
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-[color:var(--color-text-light)]/70">
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-[color:var(--color-accent-turquoise)]" /><span>100% transparent</span></div>
            <div className="flex items-center gap-2"><Users className="w-5 h-5 text-[color:var(--color-accent-pink)]" /><span>5000+ zufriedene Kunden</span></div>
            <div className="flex items-center gap-2"><Award className="w-5 h-5 text-[color:var(--color-premium-gold)]" /><span>Bestpreis-Garantie</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
