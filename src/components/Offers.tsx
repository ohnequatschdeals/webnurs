import offers from "@/data/offers.json";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/design-system/Card";
import { Button } from "@/components/design-system/Button";

type Offer = {
  id: string;
  title: string;
  benefits: string[];
  price: string;
  link?: string;
  tier?: "standard" | "premium";
};

export default function Offers() {
  const data = offers as Offer[];

  return (
    <section id="offers" className="content-max-width section-spacing">
      <h2 className="gradient-text text-3xl md:text-4xl font-bold">Aktuelle Angebote</h2>
      <p className="mt-2 text-white/80">Klar, verständlich, ohne Kleingedrucktes.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((offer) => (
          <Card key={offer.id} variant="glass" glow="auto" padding="lg">
            <CardHeader className="flex items-start justify-between">
              <h3 className="text-xl font-semibold">{offer.title}</h3>
              <span
                className={`rounded-full px-2 py-1 text-xs font-semibold ${
                  offer.tier === "premium"
                    ? "bg-[#FFD166]/20 text-[#FFD166]"
                    : "bg-white/10 text-white/80"
                }`}
              >
                {offer.tier === "premium" ? "Premium" : "Standard"}
              </span>
            </CardHeader>

            <CardContent>
              <ul className="space-y-1 text-sm text-white/80">
                {offer.benefits.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="items-end justify-between">
              <div>
                <div className="text-2xl font-bold text-[color:var(--color-accent-turquoise)]">{offer.price}</div>
                <div className="text-xs text-white/60">inkl. MwSt.</div>
              </div>
              <Button asChild={undefined as any} size="md" className="min-w-[140px]">
                <a href={offer.link || "#"} target="_blank" rel="noreferrer">Deal sichern</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
