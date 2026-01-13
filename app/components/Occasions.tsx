export default function Occasions() {
  return (
    <section id="occasions" style={styles.wrap}>
      <div style={styles.inner}>
        <h2 style={styles.h2}>Every Occasion Has a Pour</h2>
        <p style={styles.sub}>
          My Drink Family is designed around moments — not trends.
        </p>

        <div style={styles.grid}>
          {OCCASIONS.map((o) => (
            <div key={o.title} style={styles.card}>
              <div style={styles.title}>{o.title}</div>
              <div style={styles.desc}>{o.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const OCCASIONS = [
  { title: "Brunch", desc: "Bright, social, and effortless." },
  { title: "Celebrations", desc: "Milestones deserve flavor." },
  { title: "Evenings In", desc: "Refined comfort, elevated." },
  { title: "Nightlife", desc: "Bold profiles for bold nights." },
  { title: "Gifting", desc: "Premium without explanation." },
  { title: "Weekends", desc: "Because time tastes better." },
];

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    padding: "52px 20px",
    background: "#ffffff",
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
  },
  h2: {
    fontSize: 28,
    letterSpacing: -0.4,
    marginBottom: 6,
  },
  sub: {
    opacity: 0.75,
    marginBottom: 24,
    maxWidth: 640,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
  },
  card: {
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: 16,
    padding: 18,
    background: "#f8f8f8",
  },
  title: {
    fontWeight: 800,
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    opacity: 0.75,
  },
};
