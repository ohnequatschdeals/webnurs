import Link from "next/link";
import offers from "@/data/offers.json";

type Offer = { id: string; title: string; benefits: string[]; price: string; link?: string; tier?: "standard" | "premium" };

export default function Offers() {
  const data = (offers as Offer[]) || [];
  return (
    <section id="offers" className="content-max-width section-spacing">
      <h2 className="gradient-text text-3xl md:text-4xl font-bold">Aktuelle Angebote</h2>
      <p className="mt-2 text-white/80">Klar, verständlich, ohne Kleingedrucktes.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((offer) => (
          <article key={offer.id} className="rounded-2xl border border-white/10 p-6 bg-[#1A0E23]/30 backdrop-blur-xl hover:scale-[1.02] transition">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">{offer.title}</h3>
              <span className={offer.tier==="premium" ? "rounded-full px-2 py-1 text-xs font-semibold bg-[#FFD166]/20 text-[#FFD166]" : "rounded-full px-2 py-1 text-xs font-semibold bg-white/10 text-white/80"}>
                {offer.tier==="premium" ? "Premium" : "Standard"}
              </span>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-white/80">{offer.benefits.map((b)=> (<li key={b}>• {b}</li>))}</ul>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <div className="text-2xl font-bold text-[color:var(--color-accent-turquoise)]">{offer.price}</div>
                <div className="text-xs text-white/60">inkl. MwSt.</div>
              </div>
              <Link className="px-5 py-2.5 rounded-lg text-white font-semibold" href={offer.link || "#"} style={{background:"linear-gradient(135deg,#FF3F87 0%,#A020F0 100%)"}}>
                Deal sichern
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
