import type { Metadata } from "next";
import "@/styles/globals.css";
// import { Header } from "@/components/design-system/Header";
// import { ChatBot } from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "webNurs | Ohnequatsch Deals",
  description: "Landing stabil"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {/* <div className="sticky top-0 z-40 border-b border-white/5 bg-[color:var(--color-primary-bg-dark)]/60 backdrop-blur-xl">
          <Header />
        </div> */}
        {children}
        {/* <ChatBot /> */}
      </body>
    </html>
  );
}
