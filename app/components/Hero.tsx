// app/components/Hero.tsx
import React from "react";

type HeroProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
};

export default function Hero({
  eyebrow = "THE MY DRINK FAMILY",
  title = "The world’s most luxurious ready-to-pour cocktail collection.",
  subtitle = "One house. Many moods. Built for brunch, nights out, and every celebration in between — crafted with taste, identity, and ritual.",
  primaryCtaText = "Enter the Collection",
  primaryCtaHref = "#occasions",
  secondaryCtaText = "Our Philosophy",
  secondaryCtaHref = "#philosophy",
}: HeroProps) {
  return (
    <section style={styles.wrap} aria-label="Homepage hero">
      <div style={styles.bgGlow} aria-hidden="true" />
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Left: Copy */}
          <div style={styles.copyCol}>
            <div style={styles.eyebrowRow}>
              <span style={styles.eyebrowDot} aria-hidden="true" />
              <p style={styles.eyebrow}>{eyebrow}</p>
            </div>

            <h1 style={styles.h1}>{title}</h1>

            <p style={styles.sub}>{subtitle}</p>

            <div style={styles.ctaRow}>
              <a href={primaryCtaHref} style={styles.primaryBtn}>
                {primaryCtaText}
              </a>
              <a href={secondaryCtaHref} style={styles.secondaryBtn}>
                {secondaryCtaText}
              </a>
            </div>

            <div style={styles.kpiRow} aria-label="Highlights">
              <div style={styles.kpiItem}>
                <div style={styles.kpiNum}>16</div>
                <div style={styles.kpiLabel}>Houses</div>
              </div>
              <div style={styles.kpiDivider} aria-hidden="true" />
              <div style={styles.kpiItem}>
                <div style={styles.kpiNum}>68+</div>
                <div style={styles.kpiLabel}>Flavors</div>
              </div>
              <div style={styles.kpiDivider} aria-hidden="true" />
              <div style={styles.kpiItem}>
                <div style={styles.kpiNum}>Ready</div>
                <div style={styles.kpiLabel}>to Pour</div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div style={styles.visualCol} aria-hidden="true">
            <div style={styles.card}>
              <div style={styles.cardTop}>
                <div style={styles.badge}>Editorial Preview</div>
                <div style={styles.rule} />
              </div>

              <div style={styles.heroStack}>
                <div style={{ ...styles.can, ...styles.can1 }} />
                <div style={{ ...styles.can, ...styles.can2 }} />
                <div style={{ ...styles.can, ...styles.can3 }} />
                <div style={{ ...styles.can, ...styles.can4 }} />
              </div>

              <div style={styles.cardBottom}>
                <div style={styles.metaLeft}>
                  <div style={styles.metaTitle}>Signature Moments</div>
                  <div style={styles.metaSub}>Brunch • Rooftop • Date Night • Celebration</div>
                </div>
                <div style={styles.metaRight}>
                  <div style={styles.metaChip}>Ice-cold</div>
                  <div style={styles.metaChip}>Crisp</div>
                  <div style={styles.metaChip}>Effortless</div>
                </div>
              </div>
            </div>

            <div style={styles.caption}>
              <span style={styles.captionDot} aria-hidden="true" />
              <span>Luxury editorial energy. Commerce-ready clarity.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Inline styles for maximum drop-in reliability (no CSS dependencies). */
const styles: Record<string, React.CSSProperties> = {
  wrap: {
    position: "relative",
    overflow: "hidden",
    padding: "64px 0",
    background:
      "radial-gradient(1200px 600px at 20% 10%, rgba(227,211,173,0.16), rgba(0,0,0,0) 60%), linear-gradient(180deg, #0B0B0D 0%, #070709 100%)",
    color: "#F4EFE3",
  },
  bgGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(900px 520px at 70% 40%, rgba(227,211,173,0.14), rgba(0,0,0,0) 65%)",
    pointerEvents: "none",
  },
  container: {
    position: "relative",
    width: "min(1120px, calc(100% - 40px))",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 40,
    alignItems: "center",
  },
  copyCol: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  eyebrowRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  eyebrowDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: "#E3D3AD",
    boxShadow: "0 0 18px rgba(227,211,173,0.55)",
  },
  eyebrow: {
    margin: 0,
    letterSpacing: "0.14em",
    fontSize: 12,
    color: "rgba(244,239,227,0.82)",
  },
  h1: {
    margin: 0,
    fontSize: 54,
    lineHeight: 1.03,
    letterSpacing: "-0.02em",
    fontWeight: 700,
  },
  sub: {
    margin: 0,
    fontSize: 18,
    lineHeight: 1.6,
    color: "rgba(244,239,227,0.78)",
    maxWidth: 560,
  },
  ctaRow: {
    marginTop: 8,
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
  },
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: 12,
    textDecoration: "none",
    background: "linear-gradient(180deg, #E3D3AD 0%, #CDBA8C 100%)",
    color: "#0B0B0D",
    fontWeight: 700,
    letterSpacing: "0.01em",
    boxShadow:
      "0 10px 28px rgba(0,0,0,0.45), 0 0 0 1px rgba(227,211,173,0.22) inset",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: 12,
    textDecoration: "none",
    background: "rgba(255,255,255,0.06)",
    color: "#F4EFE3",
    fontWeight: 650,
    letterSpacing: "0.01em",
    border: "1px solid rgba(227,211,173,0.22)",
  },
  kpiRow: {
    marginTop: 18,
    display: "flex",
    alignItems: "center",
    gap: 18,
    padding: "14px 16px",
    borderRadius: 16,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(227,211,173,0.16)",
    width: "fit-content",
  },
  kpiItem: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    minWidth: 88,
  },
  kpiNum: {
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: "0.02em",
    color: "#E3D3AD",
  },
  kpiLabel: {
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(244,239,227,0.7)",
  },
  kpiDivider: {
    width: 1,
    height: 26,
    background: "rgba(227,211,173,0.22)",
  },

  visualCol: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    alignItems: "flex-end",
  },
  card: {
    width: "100%",
    maxWidth: 440,
    borderRadius: 22,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
    border: "1px solid rgba(227,211,173,0.18)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
    overflow: "hidden",
  },
  cardTop: {
    padding: 16,
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  badge: {
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(244,239,227,0.78)",
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(227,211,173,0.22)",
    background: "rgba(0,0,0,0.22)",
  },
  rule: {
    flex: 1,
    height: 1,
    background: "rgba(227,211,173,0.18)",
  },
  heroStack: {
    position: "relative",
    height: 260,
    padding: 18,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 14,
    background:
      "radial-gradient(520px 260px at 50% 55%, rgba(227,211,173,0.14), rgba(0,0,0,0) 65%)",
  },
  can: {
    width: 70,
    height: 220,
    borderRadius: 18,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 35%, rgba(0,0,0,0.18) 100%)",
    border: "1px solid rgba(255,255,255,0.14)",
    boxShadow: "0 18px 34px rgba(0,0,0,0.55)",
    position: "relative",
    overflow: "hidden",
  },
  can1: { transform: "translateY(14px) rotate(-2deg)" },
  can2: { transform: "translateY(0px) rotate(1deg)", width: 76, height: 236 },
  can3: { transform: "translateY(10px) rotate(2deg)" },
  can4: { transform: "translateY(22px) rotate(-1deg)", opacity: 0.9 },

  cardBottom: {
    padding: 16,
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderTop: "1px solid rgba(227,211,173,0.14)",
    background: "rgba(0,0,0,0.14)",
  },
  metaLeft: { display: "flex", flexDirection: "column", gap: 4 },
  metaTitle: { fontWeight: 800, letterSpacing: "0.01em" },
  metaSub: { fontSize: 12, color: "rgba(244,239,227,0.74)" },
  metaRight: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "flex-end",
  },
  metaChip: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(227,211,173,0.18)",
    color: "rgba(244,239,227,0.82)",
    background: "rgba(255,255,255,0.04)",
    whiteSpace: "nowrap",
  },
  caption: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    color: "rgba(244,239,227,0.7)",
    fontSize: 12,
    letterSpacing: "0.02em",
  },
  captionDot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: "rgba(227,211,173,0.8)",
  },
};
