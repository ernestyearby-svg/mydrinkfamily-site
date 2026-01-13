// app/brands/page.tsx
import BrandHero from "../components/BrandHero";
import ProofStrip from "../components/ProofStrip";
import LineupLookbook from "../components/LineupLookbook";

export const metadata = {
  title: "Brands — My Drink Family",
  description:
    "One family. Many houses. Luxury ready-to-pour cocktails built for brunch, nights out, and every celebration in between.",
};

export default function BrandsPage() {
  return (
    <main>
      {/* BLACK HERO (cinematic) */}
      <section className="bg-[#070707]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <BrandHero />
        </div>
      </section>

      {/* IVORY LOOKBOOK BODY */}
      <section className="bg-[#F6F0E7]">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <ProofStrip />
          <div className="h-10 md:h-14" />
          <LineupLookbook />
          <div className="h-10 md:h-14" />
        </div>
      </section>
    </main>
  );
}
