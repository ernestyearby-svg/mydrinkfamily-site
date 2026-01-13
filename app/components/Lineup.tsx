"use client";

import React from "react";

type Item = {
  name: string;
  sub: string;
  flavors: string[];
  note: string;
};

const ITEMS: Item[] = [
  {
    name: "MyMosa",
    sub: "Luxury RTD Mimosa",
    flavors: ["Classic Orange", "Pineapple", "Tropical Blend", "Strawberry"],
    note: "Flagship Four",
  },
  {
    name: "MyJito",
    sub: "Premium Mojito",
    flavors: ["Classic Mojito", "Coconut Mojito", "Berry Mojito", "Passionfruit Mojito"],
    note: "Flagship Four",
  },
  {
    name: "MyGarita",
    sub: "Premium Cocktail",
    flavors: ["Classic Lime", "Strawberry", "Mango", "Watermelon"],
    note: "Flagship Four",
  },
  {
    name: "MyTai",
    sub: "Premium Tiki Cocktail",
    flavors: ["Classic Mai Tai", "Pineapple Mai Tai", "Mango Mai Tai", "Coconut Mai Tai"],
    note: "Flagship Four",
  },
  {
    name: "MyScato",
    sub: "Premium Moscato",
    flavors: ["Classic Moscato", "Peach Moscato", "Strawberry Moscato", "Pineapple Moscato"],
    note: "Flagship Four",
  },
  {
    name: "MyGria",
    sub: "Premium Sangria",
    flavors: ["Classic Red", "Tropical White", "Berry White", "Citrus Rosé"],
    note: "Flagship Four",
  },
  {
    name: "MyTini",
    sub: "Premium Martini",
    flavors: ["Classic Martini", "Lemon Drop", "Espresso", "Pomegranate"],
    note: "Flagship Four",
  },
  {
    name: "MyMosé",
    sub: "Premium Rosé Spritz",
    flavors: ["Classic Rosé", "Peach Rosé", "Strawberry Rosé", "Raspberry Rosé"],
    note: "Flagship Four",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium shadow-sm">
      {children}
    </span>
  );
}

export default function Lineup() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs tracking-[0.28em] uppercase opacity-70">Lineup</p>

        <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
          Flagship houses, ready for scale.
        </h2>

        <p className="mt-3 max-w-2xl text-base opacity-80">
          A commerce-ready overview of the core lineup — each house built to own a moment,
          with consistent premium execution.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm opacity-80">{item.sub}</p>
                </div>
                <Badge>{item.note}</Badge>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.flavors.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs opacity-90 shadow-sm"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
