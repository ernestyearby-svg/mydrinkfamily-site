// app/page.tsx
import Hero from "./components/Hero";
import BrandRail from "./components/BrandRail";
import Lineup from "./components/Lineup";
import Occasions from "./components/Occasions";
import Philosophy from "./components/Philosophy";

export default function Page() {
  return (
    <main>
      <Hero />
      <BrandRail />
      <Lineup />
      <Occasions />
      <Philosophy />
    </main>
  );
}
