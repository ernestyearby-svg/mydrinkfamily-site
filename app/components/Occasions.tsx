// app/components/Occasions.tsx
import React from "react";

const OCCASIONS = [
  { title: "Brunch", desc: "Weekend rituals, elevated." },
  { title: "Celebrations", desc: "Toasts that feel like moments." },
  { title: "Gifting", desc: "Premium, photogenic, and easy to share." },
  { title: "Hosting", desc: "Effortless luxury for your table." },
];

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className ?? ""}
      aria-hidden={true}
    >
      <path
        d="M12 2l1.2 5.3L18 9l-4.8 1.7L12 16l-1.2-5.3L6 9l4.8-1.7L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 13l.7 3.1L22 17l-2.3.9L19 21l-.7-3.1L16 17l2.3-.9L19 13z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Occasions() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.28em] uppercase opacity-70">
              Occasions
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
              Built for real moments.
            </h2>
            <p className="mt-3 max-w-2xl text-base opacity-80">
              Designed to fit brunch, gifting, hosting, and celebration — without
              feeling mass-market.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 opacity-80">
            <SparkIcon className="h-5 w-5" />
            <span className="text-sm">Cinematic polish</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OCCASIONS.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white">
                  <SparkIcon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{o.title}</h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed opacity-80">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
