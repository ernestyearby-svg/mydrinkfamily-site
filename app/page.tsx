import Hero from "./components/Hero";
import BrandRail from "./components/BrandRail";
import Occasions from "./components/Occasions";
import Philosophy from "./components/Philosophy";
import Lineup from "./components/Lineup";

export default function Home() {
  return (
 <main>
  <Hero />
  <BrandRail />
  <Lineup />

  <section id="occasions">
    <Occasions />
  </section>

  <section id="philosophy">
    <Philosophy />
  </section>
</main>

