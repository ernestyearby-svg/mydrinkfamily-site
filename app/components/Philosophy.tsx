export default function Philosophy() {
  return (
    <section style={styles.wrap}>
      <div style={styles.inner}>
        <h2 style={styles.h2}>Our Philosophy</h2>

        <p style={styles.p}>
          We don’t chase flavors — we build families.
        </p>

        <p style={styles.p}>
          Every brand under My Drink Family is crafted with intention:
          balance over excess, design over noise, and quality that speaks
          without shouting.
        </p>

        <p style={styles.p}>
          This is not fast alcohol.  
          This is considered drinking.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    padding: "60px 20px",
    background: "#101010",
    color: "#ffffff",
  },
  inner: {
    maxWidth: 900,
    margin: "0 auto",
  },
  h2: {
    fontSize: 30,
    letterSpacing: -0.5,
    marginBottom: 16,
  },
  p: {
    fontSize: 18,
    lineHeight: 1.6,
    opacity: 0.9,
    marginBottom: 16,
  },
};
