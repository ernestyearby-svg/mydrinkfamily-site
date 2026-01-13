// app/components/BrandRail.tsx
import React from "react";

const BRANDS = [
  "MyMosa",
  "MyJito",
  "MyGarita",
  "MyTai",
  "MyScato",
  "MyGria",
  "MyTini",
  "MyMosé",
];

export default function BrandRail() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.28em] uppercase opacity-70">
              The Houses
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
              One family. Many experiences.
            </h2>
            <p className="mt-3 max-w-2xl text-base opacity-80">
              Each house is a distinct ritual — built with the same premium
              standard, tuned to different moments.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/50 backdrop-blur shadow-sm">
            {/* subtle champagne glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                borderRadius: 18,
                background:
                  "radial-gradient(320px 160px at 50% 20%, rgba(227,211,173,0.16), rgba(0,0,0,0) 60%)",
              }}
            />

            <div className="relative flex flex-wrap items-center gap-3 p-5">
              {BRANDS.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium shadow-sm"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-3 text-xs opacity-70">
            Premium-ready brand system — consistent, scalable, and built for
            distribution.
          </p>
        </div>
      </div>
    </section>
  );
}
