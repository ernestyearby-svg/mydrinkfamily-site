// app/components/Lineup.tsx
export default function Lineup() {
  const items = [
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

  const shell: React.CSSProperties = {
    padding: "84px 20px",
    background:
      "radial-gradient(900px 480px at 15% 10%, rgba(227,211,173,0.10), rgba(0,0,0,0) 60%), radial-gradient(900px 520px at 85% 30%, rgba(227,211,173,0.06), rgba(0,0,0,0) 65%), linear-gradient(180deg, rgba(0,0,0,0.90), rgba(0,0,0,0.98))",
    borderTop: "1px solid rgba(227,211,173,0.12)",
    borderBottom: "1px solid rgba(227,211,173,0.10)",
  };

  const container: React.CSSProperties = {
    maxWidth: 1180,
    margin: "0 auto",
  };

  const eyebrow: React.CSSProperties = {
    letterSpacing: 2.6,
    fontSize: 12,
    textTransform: "uppercase",
    color: "rgba(227,211,173,0.85)",
    marginBottom: 12,
  };

  const title: React.CSSProperties = {
    fontSize: 44,
    lineHeight: 1.06,
    margin: 0,
    color: "rgba(255,255,255,0.94)",
    fontWeight: 600,
  };

  const subtitle: React.CSSProperties = {
    marginTop: 14,
    maxWidth: 720,
    fontSize: 16,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.72)",
  };

  const grid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
    gap: 18,
    marginTop: 34,
  };

  const card: React.CSSProperties = {
    gridColumn: "span 6",
    borderRadius: 22,
    padding: 20,
    border: "1px solid rgba(227,211,173,0.16)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(0,0,0,0.36))",
    boxShadow: "0 28px 80px rgba(0,0,0,0.55)",
    position: "relative",
    overflow: "hidden",
    transition: "transform 180ms ease, border-color 180ms ease, background 180ms ease",
  };

  const glow: React.CSSProperties = {
    position: "absolute",
    inset: -2,
    background:
      "radial-gradient(420px 220px at 20% 10%, rgba(227,211,173,0.18), rgba(0,0,0,0) 55%), radial-gradient(520px 260px at 85% 40%, rgba(227,211,173,0.10), rgba(0,0,0,0) 65%)",
    pointerEvents: "none",
  };

  const cardTop: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 14,
    position: "relative",
    zIndex: 2,
    marginBottom: 14,
  };

  const name: React.CSSProperties = {
    margin: 0,
    fontSize: 22,
    letterSpacing: 0.3,
    color: "rgba(255,255,255,0.95)",
    fontWeight: 650,
  };

  const sub: React.CSSProperties = {
    marginTop: 6,
    fontSize: 13,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    color: "rgba(227,211,173,0.78)",
  };

  const badge: React.CSSProperties = {
    fontSize: 12,
    letterSpacing: 0.6,
    color: "rgba(0,0,0,0.86)",
    background: "rgba(227,211,173,0.92)",
    padding: "8px 12px",
    borderRadius: 999,
    whiteSpace: "nowrap",
    boxShadow: "0 10px 22px rgba(0,0,0,0.35)",
    position: "relative",
    zIndex: 2,
  };

  const bullets: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 10,
    position: "relative",
    zIndex: 2,
    marginTop: 4,
  };

  const pill: React.CSSProperties = {
    borderRadius: 999,
    padding: "10px 12px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(0,0,0,0.22)",
    color: "rgba(255,255,255,0.82)",
    fontSize: 13,
    lineHeight: 1.2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const footerRow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 16,
    position: "relative",
    zIndex: 2,
  };

  const hint: React.CSSProperties = {
    fontSize: 13,
    color: "rgba(255,255,255,0.65)",
  };

  const cta: React.CSSProperties = {
    fontSize: 13,
    color: "rgba(227,211,173,0.92)",
    textDecoration: "none",
    border: "1px solid rgba(227,211,173,0.26)",
    background: "rgba(0,0,0,0.18)",
    padding: "10px 12px",
    borderRadius: 999,
  };

  return (
    <section id="lineup" style={shell}>
      <div style={container}>
        <div style={eyebrow}>The Portfolio</div>
        <h2 style={title}>Flagship Lineup</h2>
        <p style={subtitle}>
          Eight houses. Four core flavors each. Built to scale as a single unified family —
          premium, consistent, and instantly recognizable.
        </p>

        <div style={grid}>
          {items.map((x) => (
            <div
              key={x.name}
              style={card}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(227,211,173,0.30)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(0,0,0,0.34))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0px)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(227,211,173,0.16)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(0,0,0,0.36))";
              }}
            >
              <div style={glow} />
              <div style={cardTop}>
                <div>
                  <h3 style={name}>{x.name}</h3>
                  <div style={sub}>{x.sub}</div>
                </div>
                <div style={badge}>{x.note}</div>
              </div>

              <div style={bullets}>
                {x.flavors.map((f) => (
                  <div key={f} style={pill} title={f}>
                    {f}
                  </div>
                ))}
              </div>

              <div style={footerRow}>
                <div style={hint}>Built for bars, brunch, and retail velocity.</div>
                <a style={cta} href="#occasions">
                  See occasions →
                </a>
              </div>

              {/* Mobile responsiveness without CSS files */}
              <style>{`
                @media (max-width: 900px) {
                  #lineup div[style*="grid-template-columns: repeat(12"] > div {
                    grid-column: span 12 !important;
                  }
                }
                @media (max-width: 520px) {
                  #lineup h2 { font-size: 34px !important; }
                  #lineup { padding: 64px 16px !important; }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
