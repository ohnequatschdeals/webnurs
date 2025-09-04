import offers from "@/data/offers.json";
type Offer = { id: string; title: string; benefits: string[]; price: string; link?: string; tier?: "standard" | "premium"; };
export default function Offers() {
  const data = offers as Offer[];
  return (
    <section id="offers" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold">Aktuelle Angebote</h2>
      <p className="mt-2 text-white/80">Klar, verständlich, ohne Kleingedrucktes.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((offer) => (
          <article key={offer.id} className="glass-card p-6 hover:shadow-lg transition">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">{offer.title}</h3>
              <span className={`rounded-full px-2 py-1 text-xs font-semibold ${offer.tier==="premium" ? "bg-[color:var(--color-premium)]/20 text-[color:var(--color-premium)]" : "bg-white/10 text-white/80"}`}>
                {offer.tier==="premium" ? "Premium" : "Standard"}
              </span>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-white/80">{offer.benefits.map((b)=> (<li key={b}>• {b}</li>))}</ul>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <div className="text-2xl font-bold text-[color:var(--color-accent)]">{offer.price}</div>
                <div className="text-xs text-white/60">inkl. MwSt.</div>
              </div>
              <a className="btn-primary" href={offer.link || "#"} target="_blank" rel="noreferrer">Deal sichern</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
