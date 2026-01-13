// app/components/ProofStrip.tsx
export default function ProofStrip() {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/60 backdrop-blur">
      <div className="px-6 py-5 md:px-8 md:py-6">
        <div className="text-center text-[12px] font-semibold tracking-[0.18em] text-[#2A241E]/70">
          TWO SERVINGS PER CAN • ZERO WASTE • FASTER SERVICE • ALWAYS CONSISTENT
        </div>

        <div className="mt-3 text-center text-[12px] font-semibold tracking-[0.14em] text-[#2A241E]/60">
          600+ ACCOUNTS • DOTTIE’S: 92 LOCATIONS • SMITH’S: 28 LOCATIONS
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </div>
  );
}
