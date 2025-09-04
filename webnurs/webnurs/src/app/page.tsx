import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import KiBerater from "@/components/KiBerater";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Offers />
      <KiBerater />
      <Footer />
    </main>
  );
}
