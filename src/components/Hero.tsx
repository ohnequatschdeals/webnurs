"use client";
import { useI18n } from "@/i18n/I18nProvider";
export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="relative glass-card p-8 md:p-12">
        <div className="pointer-events-none absolute -right-10 -top-10 hidden h-40 w-40 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,255,200,0.5),rgba(126,63,255,0.2),transparent_70%)] blur-2xl opacity-30 md:block" />
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          <span className="bg-gradient-to-r from-[color:var(--color-accent)] via-[color:var(--color-secondary)] to-[color:var(--color-premium)] bg-clip-text text-transparent">
            {t("hero.title")}
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">{t("hero.subtitle")}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#offers" className="btn-primary">{t("hero.cta.offers")}</a>
        </div>
      </div>
    </section>
  );
}
