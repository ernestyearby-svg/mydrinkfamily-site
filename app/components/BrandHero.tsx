// app/components/BrandHero.tsx
import Link from "next/link";

export default function BrandHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070707]">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#E3D3AD]/10 blur-3xl" />
        <div className="absolute right-[-120px] top-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-140px] left-1/3 h-96 w-96 rounded-full bg-[#E3D3AD]/8 blur-3xl" />
      </div>

      <div className="relative grid gap-10 px-7 py-12 md:grid-cols-2 md:gap-12 md:px-12 md:py-16">
        {/* left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E3D3AD]" />
            THE MY DRINK FAMILY
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
            The world’s most luxurious ready-to-pour cocktail collection.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
            One house. Many moods. Built for brunch, nights out, and every
            celebration in between — crafted with taste, identity, and ritual.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#E3D3AD] px-5 py-3 text-sm font-medium text-[#141414]"
            >
              Enter the Collection
            </Link>
            <Link
              href="/philosophy"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white"
            >
              Our Philosophy
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            <Kpi label="HOUSES" value="16" />
            <Kpi label="FLAVORS" value="68+" />
            <Kpi label="FORMAT" value="READY" />
          </div>
        </div>

        {/* right (editorial preview card) */}
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <div className="text-[10px] tracking-[0.25em] text-white/60">
                EDITORIAL PREVIEW
              </div>
              <div className="text-[10px] text-white/50">Signature Moments</div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-28 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0"
                  />
                ))}
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold text-white">
                  Signature Moments
                </div>
                <div className="mt-1 text-xs text-white/60">
                  Brunch • Rooftop • Date Night • Celebration
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>Ice-cold</Pill>
                  <Pill>Crisp</Pill>
                  <Pill>Effortless</Pill>
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-white/55">
              Luxury editorial energy. Commerce-ready clarity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
      <div className="text-[10px] tracking-[0.22em] text-white/55">{label}</div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
      {children}
    </span>
  );
}
