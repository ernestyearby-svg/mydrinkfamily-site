// app/components/Header.tsx
import React from "react";

export default function Header() {
  return (
    <header style={styles.wrap}>
      <div style={styles.inner}>
        <div style={styles.logo}>MyDrinkFamily</div>

        <nav style={styles.nav}>
          <a href="#brands" style={styles.link}>Brands</a>
          <a href="#occasions" style={styles.link}>Occasions</a>
          <a href="#philosophy" style={styles.link}>Philosophy</a>
        </nav>

        <div style={styles.cta}>
          <span style={styles.age}>21+</span>
        </div>
      </div>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(7,7,9,0.75)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(227,211,173,0.18)",
  },
  inner: {
    height: 68,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "min(1120px, calc(100% - 40px))",
    margin: "0 auto",
  },
  logo: {
    fontWeight: 800,
    letterSpacing: "0.08em",
    color: "#E3D3AD",
    textTransform: "uppercase",
    fontSize: 14,
  },
  nav: {
    display: "flex",
    gap: 24,
  },
  link: {
    color: "rgba(244,239,227,0.75)",
    textDecoration: "none",
    fontSize: 14,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  cta: {
    display: "flex",
    alignItems: "center",
  },
  age: {
    border: "1px solid rgba(227,211,173,0.4)",
    borderRadius: 999,
    padding: "6px 12px",
    fontSize: 12,
    color: "#E3D3AD",
    letterSpacing: "0.1em",
  },
};
