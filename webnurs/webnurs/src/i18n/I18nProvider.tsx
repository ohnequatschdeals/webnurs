"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import de from "./messages/de.json"; import en from "./messages/en.json"; import tr from "./messages/tr.json";
type Messages = Record<string,string>; type Locale="de"|"en"|"tr";
const messages: Record<Locale,Messages> = { de, en, tr };
type Ctx = { locale: Locale; t:(k:string)=>string; setLocale:(l:Locale)=>void; };
const I18nContext = createContext<Ctx|undefined>(undefined);
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale,setLocale]=useState<Locale>("de");
  useEffect(()=>{ const s=localStorage.getItem("locale") as Locale|null; if(s && messages[s]) setLocale(s); },[]);
  const change=(l:Locale)=>{ setLocale(l); localStorage.setItem("locale", l); };
  const t=(k:string)=>messages[locale][k] || k;
  return <I18nContext.Provider value={{ locale, t, setLocale: change }}>{children}</I18nContext.Provider>;
}
export function useI18n(){ const ctx=useContext(I18nContext); if(!ctx) throw new Error("useI18n must be used within I18nProvider"); return ctx; }
