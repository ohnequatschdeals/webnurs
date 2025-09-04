"use client";
import { useI18n } from "@/i18n/I18nProvider";
export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  return (
    <div className="flex gap-2">
      {["de","en","tr"].map(l=>(
        <button key={l} onClick={()=>setLocale(l as any)}
          className={`px-2 py-1 text-sm rounded-md ${locale===l ? "bg-accent text-black" : "bg-white/10 text-white/70"}`}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
