export default function Occasions() {
  const cards = [
    {
      title: "Brunch Rituals",
      desc: "Late light, chilled cans, unhurried conversation. Your weekend—curated.",
      tags: ["Saturday", "Sunday", "Day Parties"],
    },
    {
      title: "Rooftop Evenings",
      desc: "Golden hour transitions into city glow. Clean pour, clean vibe.",
      tags: ["Sunset", "Views", "Music"],
    },
    {
      title: "Game Night & Hosts",
      desc: "Host like a pro: premium taste, zero mess, instant serving rhythm.",
      tags: ["Friends", "Easy Serve", "No Bar Setup"],
    },
    {
      title: "Celebrations",
      desc: "Birthdays, promotions, milestones—pop the moment without the prep.",
      tags: ["Toasts", "Milestones", "Gatherings"],
    },
  ];

  return (
    <section
      id="occasions"
      style={{
        padding: "88px 24px",
        background:
          "radial-gradient(900px 420px at 12% 10%, rgba(227,211,173,0.18), transparent 60%), radial-gradient(900px 420px at 88% 0%, rgba(255,255,255,0.10), transparent 55%), #0b0b0b",
        borderTop: "1px solid rgba(227,211,173,0.18)",
        borderBottom: "1px solid rgba(227,211,173,0.14)",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: 26,
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <div
              style={{
                letterSpacing: 2.4,
                fontSize: 12,
                opacity: 0.78,
                color: "#E3D3AD",
                textTransform: "uppercase",
              }}
            >
              Occasions
            </div>

            <h2
              style={{
                margin: "10px 0 10px",
                fontSize: 40,
                lineHeight: 1.12,
                color: "#f6f1e6",
                fontWeight: 650,
              }}
            >
              Lifestyle-ready. Event-proof.
            </h2>

            <p
              style={{
                margin: 0,
                color: "rgba(246,241,230,0.78)",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              We built the front door to feel like a luxury editorial—but behave like commerce.
              These are the moments the My Drink Family was designed to own.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              padding: "10px 12px",
              borderRadius: 14,
              border: "1px solid rgba(227,211,173,0.20)",
              background: "rgba(0,0,0,0.35)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              color: "rgba(246,241,230,0.85)",
              fontSize: 13,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#E3D3AD" }}>Signature:</span>
            Clean serve • Chilled finish • Zero clutter
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 16,
          }}
        >
          {cards.map((c, i) => (
          <div
            key={c.title}
            className="card"
            style={{
              gridColumn: "span 6",
              borderRadius: 22,
              padding: 18,
              border: "1px solid rgba(227,211,173,0.18)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.30))",
              boxShadow: "0 30px 90px rgba(0,0,0,0.45)",
              overflow: "hidden",
              position: "relative",
            }}
           >

            >
              {/* subtle “cinematic light” */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: -2,
                  background:
                    i % 2 === 0
                      ? "radial-gradient(600px 260px at 20% 0%, rgba(227,211,173,0.22), transparent 55%)"
                      : "radial-gradient(600px 260px at 80% 0%, rgba(227,211,173,0.18), transparent 55%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: "#E3D3AD",
                      boxShadow: "0 0 0 6px rgba(227,211,173,0.12)",
                    }}
                  />
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 18,
                      color: "#f6f1e6",
                      letterSpacing: 0.2,
                    }}
                  >
                    {c.title}
                  </h3>
                </div>

                <p
                  style={{
                    margin: "0 0 14px",
                    color: "rgba(246,241,230,0.76)",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {c.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 12,
                        padding: "7px 10px",
                        borderRadius: 999,
                        border: "1px solid rgba(227,211,173,0.18)",
                        background: "rgba(0,0,0,0.25)",
                        color: "rgba(246,241,230,0.82)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Full-width “cinematic band” */}
          <div
            style={{
              gridColumn: "span 12",
              borderRadius: 26,
              padding: 22,
              border: "1px solid rgba(227,211,173,0.18)",
              background:
                "linear-gradient(90deg, rgba(227,211,173,0.14), rgba(0,0,0,0.18) 45%, rgba(227,211,173,0.10))",
              boxShadow: "0 35px 120px rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: 760 }}>
              <div style={{ color: "#E3D3AD", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
                Host Mode
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 20,
                  color: "#f6f1e6",
                  lineHeight: 1.35,
                  fontWeight: 600,
                }}
              >
                The fastest way to elevate a table: premium cans, chilled, ready.
              </div>
              <div style={{ marginTop: 6, color: "rgba(246,241,230,0.74)", fontSize: 14, lineHeight: 1.7 }}>
                Perfect for venues, celebrations, and curated home hosting—no bartender required.
              </div>
            </div>

            <a
              href="#lineup"
              style={{
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: 14,
                border: "1px solid rgba(227,211,173,0.35)",
                color: "#0b0b0b",
                background: "#E3D3AD",
                fontWeight: 650,
                letterSpacing: 0.2,
              }}
            >
              Explore the lineup
            </a>
          </div>
        </div>

        {/* Mobile grid fix */}
        <style>{`
          @media (max-width: 900px) {
            #occasions .card { grid-column: span 12; }
          }
        `}</style>
      </div>
    </section>
  );
}
