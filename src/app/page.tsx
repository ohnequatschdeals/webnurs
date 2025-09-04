import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import TopBerater from "@/components/TopBerater";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Offers />
      <TopBerater />
      <Footer />
    </main>
  );
}
