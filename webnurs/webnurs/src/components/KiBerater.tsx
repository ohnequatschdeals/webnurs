"use client";
import { useI18n } from "@/i18n/I18nProvider";
import { MessageSquare, Sparkles, ShieldCheck } from "lucide-react";
export default function KiBerater() {
  const { t } = useI18n();
  return (
    <section id="berater" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <h2 className="text-3xl font-bold md:text-4xl">{t("ai.title")}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="glass-card p-6 md:p-8">
          <p className="text-white/80">{t("ai.subtitle")}</p>
          <ul className="mt-6 space-y-3 text-white/85">
            <li className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-accent" /> {t("ai.point1")}</li>
            <li className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-accent" /> {t("ai.point2")}</li>
            <li className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[color:var(--color-premium)]" /> {t("ai.point3")}</li>
          </ul>
        </article>
        <article className="glass-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="bubble">{t("ai.ctaTitle")}</div>
            <div className="bubble bubble-accent mt-2">{t("ai.ctaSubtitle")}</div>
          </div>
          <div className="mt-6">
            <a href="https://wa.me/49123456789" target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2">
              <MessageSquare className="h-5 w-5" /> {t("ai.ctaButton")}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
