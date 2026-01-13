// app/components/Occasions.tsx
const GOLD = "rgba(227,211,173,0.95)";
const GOLD_SOFT = "rgba(227,211,173,0.22)";
const INK = "rgba(0,0,0,0.92)";
const INK_SOFT = "rgba(0,0,0,0.55)";
const WHITE_SOFT = "rgba(255,255,255,0.10)";
const WHITE_SOFT2 = "rgba(255,255,255,0.06)";

type Occasion = {
  title: string;
  subtitle: string;
  vibe: string;
  details: string;
};

const OCCASIONS: Occasion[] = [
  {
    title: "Brunch & Day Parties",
    subtitle: "The signature lane",
    vibe: "Sunlight, linen, city patios",
    details:
      "A crisp, celebratory pour built for first sips and long conversations. Perfect for tastings, menus, and weekend rituals.",
  },
  {
    title: "Nightlife & Lounges",
    subtitle: "After-hours energy",
    vibe: "Black badge lighting, velvet rooms",
    details:
      "A premium presence behind the bar—photogenic, clean, and confident. Designed to look as good as it tastes in low light.",
  },
  {
    title: "Hotels & Hospitality",
    subtitle: "Elevated guest experience",
    vibe: "Suite service, pool decks, lobbies",
    details:
      "A ready-to-serve premium option for mini-bars, VIP welcome kits, events, and high-velocity F&B programs.",
  },
  {
    title: "Restaurants & Pairings",
    subtitle: "Menu-native integration",
    vibe: "Chef-driven, plated moments",
    details:
      "A product that behaves like a crafted cocktail—easy to program, easy to feature, easy to repeat at scale.",
  },
];

function IconSpark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l1.2 5.1L18 8.3l-4.8 1.2L12 15l-1.2-5.5L6 8.3l4.8-1.2L12 2z"
        stroke={GOLD}
        strokeWidth="1.2"
      />
      <path
        d="M19 13l.7 3 3 1-3 1-.7 3-.7-3-3-1 3-1 .7-3z"
        stroke={GOLD}
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default function Occasions() {
  return (
    <section
      style={{
        position: "relative",
        padding: "92px 0",
        overflow: "hidden",
        background: `radial-gradient(1200px 700px at 20% 10%, ${WHITE_SOFT2}, transparent 55%),
                     radial-gradient(900px 600px at 80% 20%, ${WHITE_SOFT2}, transparent 55%),
                     linear-gradient(180deg, ${INK} 0%, rgba(0,0,0,0.86) 55%, rgba(0,0,0,0.92) 100%)`,
      }}
    >
      {/* subtle grain + vignette */}
      <div
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 500px at 50% 20%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(700px 500px at 50% 85%, rgba(227,211,173,0.08), transparent 60%)",
          opacity: 1,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E\")",
          mixBlendMode: "overlay",
          opacity: 0.22,
        }}
      />

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 22px",
          position: "relative",
        }}
      >
        {/* Header */}
        <div style={{ display: "grid", gap: 14, alignItems: "start" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: `1px solid ${GOLD_SOFT}`,
              background: "rgba(255,255,255,0.04)",
              padding: "10px 14px",
              borderRadius: 999,
              width: "fit-content",
              boxShadow: "0 20px 70px rgba(0,0,0,0.45)",
            }}
          >
            <IconSpark />
            <span
              style={{
                color: GOLD,
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Occasions
            </span>
          </div>

          <h2
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.92)",
              fontSize: 44,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              fontWeight: 600,
              maxWidth: 820,
            }}
          >
            Built for the moments people remember.
          </h2>

          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.72)",
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 760,
            }}
          >
            My Drink Family is designed to look premium in hand, photograph beautifully, and perform in real venues—from
            brunch patios to hotel programs and nightlife.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            marginTop: 34,
            display: "grid",
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {OCCASIONS.map((o, idx) => (
            <div
              key={o.title}
              style={{
                gridColumn: "span 6",
                borderRadius: 22,
                padding: 18,
                border: `1px solid ${GOLD_SOFT}`,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.30))",
                boxShadow: "0 30px 90px rgba(0,0,0,0.45)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* corner glow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: -2,
                  background:
                    "radial-gradient(600px 240px at 15% 0%, rgba(227,211,173,0.14), transparent 60%)",
                  opacity: 1,
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", display: "grid", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ display: "grid", gap: 4 }}>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.92)",
                        fontSize: 18,
                        fontWeight: 650,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {o.title}
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.62)",
                        fontSize: 12,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      {o.subtitle}
                    </div>
                  </div>

                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 999,
                      display: "grid",
                      placeItems: "center",
                      border: `1px solid ${GOLD_SOFT}`,
                      background: "rgba(255,255,255,0.04)",
                      color: GOLD,
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                    aria-label={`Card ${idx + 1}`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>

                <div
                  style={{
                    height: 1,
                    background: `linear-gradient(90deg, ${GOLD_SOFT}, rgba(255,255,255,0.08), transparent)`,
                    marginTop: 2,
                  }}
                />

                <div
                  style={{
                    color: "rgba(255,255,255,0.76)",
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.86)", fontWeight: 600 }}>Vibe:</span> {o.vibe}
                </div>

                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,0.68)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    maxWidth: 520,
                  }}
                >
                  {o.details}
                </p>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
                  <span
                    style={{
                      padding: "8px 10px",
                      borderRadius: 999,
                      border: `1px solid ${GOLD_SOFT}`,
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.74)",
                      fontSize: 12,
                    }}
                  >
                    Premium presentation
                  </span>
                  <span
                    style={{
                      padding: "8px 10px",
                      borderRadius: 999,
                      border: `1px solid ${GOLD_SOFT}`,
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.74)",
                      fontSize: 12,
                    }}
                  >
                    Menu-friendly
                  </span>
                  <span
                    style={{
                      padding: "8px 10px",
                      borderRadius: 999,
                      border: `1px solid ${GOLD_SOFT}`,
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.74)",
                      fontSize: 12,
                    }}
                  >
                    Venue-ready velocity
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive tweak (no CSS file needed) */}
        <style>{`
          @media (max-width: 900px) {
            section [data-occasions-grid] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
