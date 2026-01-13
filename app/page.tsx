// app/page.tsx
import Hero from "./components/Hero";
import Occasions from "./components/Occasions";
import Philosophy from "./components/Philosophy";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="occasions">
        <Occasions />
      </section>
      <section id="philosophy">
        <Philosophy />
      </section>
    </main>
  );
}
