import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import { I18nProvider } from "@/i18n/I18nProvider";

export const metadata: Metadata = {
  title: "webNurs",
  description: "OQD style skeleton with i18n"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <I18nProvider>
          <div className="sticky top-0 z-40 border-b border-white/5 bg-background/60 backdrop-blur-xl">
            <Header />
          </div>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
