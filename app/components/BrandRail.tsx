// app/components/BrandRail.tsx
import React from "react";

type House = {
  name: string;
  descriptor: string;
};

const HOUSES: House[] = [
  { name: "MyMosa", descriptor: "Signature Brunch" },
  { name: "MyJito", descriptor: "Fresh & Minted" },
  { name: "MyGarita", descriptor: "Salted Citrus" },
  { name: "MyTai", descriptor: "Tropical Ritual" },
  { name: "MyScato", descriptor: "Sweet Sparkle" },
  { name: "MyGria", descriptor: "Fruit-Forward Wine" },
  { name: "MyTini", descriptor: "Evening Pour" },
  { name: "MyMosé", descriptor: "Blush & Bright" },
];

export default function BrandRail() {
  return (
    <section style={styles.wrap} aria-label="Brand family">
      <div style={styles.container}>
        <header style={styles.header}>
          <h2 style={styles.h2}>One Family. Many Houses.</h2>
          <p style={styles.sub}>
            Each house is crafted for a specific mood, moment, and ritual — unified
            by quality, identity, and ease.
          </p>
        </header>

        <div style={styles.rail}>
          {HOUSES.map((house) => (
            <div key={house.name} style={styles.card}>
              <div style={styles.cardGlow} aria-hidden="true" />
              <div style={styles.cardInner}>
                <div style={styles.houseName}>{house.name}</div>
                <div style={styles.houseDesc}>{house.descriptor}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    padding: "72px 0",
    background:
      "linear-gradient(180deg, #070709 0%, #0B0B0D 100%)",
    color: "#F4EFE3",
  },
  container: {
    width: "min(1120px, calc(100% - 40px))",
    margin: "0 auto",
  },
  header: {
    maxWidth: 640,
    marginBottom: 28,
  },
  h2: {
    margin: 0,
    fontSize: 34,
    letterSpacing: "-0.02em",
    fontWeight: 700,
  },
  sub: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 1.6,
    color: "rgba(244,239,227,0.75)",
  },
  rail: {
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "minmax(220px, 1fr)",
    gap: 18,
    overflowX: "auto",
    paddingBottom: 8,
    scrollSnapType: "x mandatory",
  },
  card: {
    position: "relative",
    borderRadius: 18,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
    border: "1px solid rgba(227,211,173,0.18)",
    minHeight: 140,
    scrollSnapAlign: "start",
    boxShadow: "0 18px 40px rgba(0,0,0,0.55)",
  },
  cardGlow: {
    position: "absolute",
    inset: 0,
    borderRadius: 18,
    background:
      "radial-gradient(320px 160px at 50% 20%, rgba(227,211,173,0.16), rgba(0,0,0,0
