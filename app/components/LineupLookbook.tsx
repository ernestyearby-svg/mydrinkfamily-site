// app/components/LineupLookbook.tsx
import Link from "next/link";

type House = {
  name: string;
  sub: string;
  flavors: string[];
};

const HOUSES: House[] = [
  {
    name: "MyMosa",
    sub: "Luxury RTD Mimosa",
    flavors: ["Classic Orange", "Pineapple", "Tropical Blend", "Strawberry"],
  },
  {
    name: "MyJito",
    sub: "Premium Mojito",
    flavors: ["Classic Mojito", "Coconut Mojito", "Berry Mojito", "Passionfruit Mojito"],
  },
  {
    name: "MyGarita",
    sub: "Premium Cocktail",
    flavors: ["Classic Lime", "Strawberry", "Mango", "Watermelon"],
  },
  {
    name: "MyTai",
    sub: "Premium Tiki Cocktail",
    flavors: ["Classic Mai Tai", "Pineapple Mai Tai", "Mango Mai Tai", "Coconut Mai Tai"],
  },
  {
    name: "MyScato",
    sub: "Premium Moscato",
    flavors: ["Classic Moscato", "Peach Moscato", "Strawberry Moscato", "Pineapple Moscato"],
  },
  {
    name: "MyGria",
    sub: "Premium Sangria",
    flavors: ["Classic Red", "Tropical White", "Berry White", "Citrus Rosé"],
  },
  {
    name: "MyTini",
    sub: "Premium Martini",
    flavors: ["Classic Martini", "Lemon Drop", "Espresso", "Pomegranate"],
  },
  {
    name: "MyMosé",
    sub: "Premium Rosé Spritz",
    flavors: ["Classic Rosé", "Peach Rosé", "Strawberry Rosé", "Raspberry Rosé"],
  },
];

export default function LineupLookbook() {
  return (
    <div className="rounded-3xl border border-black/10 bg-[#FBF7F0] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      {/* header */}
      <div className="px-7 pt-9 md:px-10 md:pt-12">
        <div className="text-center text-[11px] tracking-[0.26em] text-[#2A241E]/60">
          THE LINEUP
        </div>

        <h2 className="mt-4 text-center font-semibold tracking-tight text-[#1F1A16] text-3xl md:text-4xl">
          Flagship Houses — Ready for Scale
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-[#2A241E]/70">
          A commerce-ready overview of the core lineup — each house built to own a moment,
          with consistent premium execution.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-[#1F1A16]"
          >
            Explore the Collection
          </Link>
          <Link
            href="/occasions"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-[#1F1A16]"
          >
            View Occasions
          </Link>
        </div>
      </div>

      {/* “image” frame placeholder — swap later with real lineup image */}
      <div className="px-6 pt-10 md:px-10">
        <div className="overflow-hidden rounded-[26px] border border-black/10 bg-white">
          <div className="bg-gradient-to-b from-[#1A1A1A]/5 to-transparent px-6 py-6">
            <div className="text-[10px] tracking-[0.26em] text-[#2A241E]/55">
              SIGNATURE SELECTION
            </div>
            <div className="mt-2 text-lg font-semibold text-[#1F1A16]">
              Classic Five — Signature Selection
            </div>
            <div className="mt-1 text-sm text-[#2A241E]/70">
              Premium ready-to-drink, delivered with consistency and speed.
            </div>

            {/* placeholder bars to hold space like a product photo */}
            <div className="mt-6 grid grid-cols-5 gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-32 rounded-2xl border border-black/10 bg-gradient-to-b from-black/5 to-transparent"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* benefit tiles */}
      <div className="px-6 pb-10 pt-10 md:px-10 md:pb-12">
        <div className="grid gap-4 md:grid-cols-4">
          <Benefit
            title="Two servings per can"
            body="Portion control + repeatable guest experience."
          />
          <Benefit
            title="Zero waste"
            body="No spoiled juice, no open-bottle loss, no batching errors."
          />
          <Benefit
            title="Faster service"
            body="Grab → pour → serve. Less prep, faster turns."
          />
          <Benefit
            title="Consistency"
            body="Every pour tastes the same—no bartender variance."
          />
        </div>

        {/* divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        {/* house list */}
        <div className="grid gap-5 md:grid-cols-2">
          {HOUSES.map((h) => (
            <HouseCard key={h.name} house={h} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Benefit({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/70 p-5">
      <div className="text-sm font-semibold text-[#1F1A16]">{title}</div>
      <div className="mt-2 text-sm leading-6 text-[#2A241E]/70">{body}</div>
    </div>
  );
}

function HouseCard({ house }: { house: House }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold text-[#1F1A16]">{house.name}</div>
          <div className="mt-1 text-sm text-[#2A241E]/70">{house.sub}</div>
        </div>
        <span className="rounded-full border border-black/10 bg-[#FBF7F0] px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[#2A241E]/70">
          FLAGSHIP FOUR
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {house.flavors.map((f) => (
          <span
            key={f}
            className="inline-flex items-center rounded-full border border-black/10 bg-[#FBF7F0] px-3 py-1 text-[12px] text-[#1F1A16]"
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}
