export default function Page() {
return (
<main className="landing-page">
<section className="hero">
<div className="hero-overlay" />
<div className="hero-content">
<div className="hero-left">
<div className="brand-top">
<div className="brand-name">MY DRINK FAMILY</div>
<div className="brand-est">EST. 2011</div>
</div>

<h1>
THE ORIGINAL
<br />
<span>MIMOSA</span>
<br />
IN A CAN.
</h1>

<p className="subheadline">REAL JUICE. REAL FLAVOR. SINCE 2011.</p>

<p className="body-copy">
My Drink Family pioneered the ready-to-pour mimosa — crafted with
real juice, wine, and natural flavors for the perfect brunch
cocktail experience anywhere.
</p>

<div className="cta-row">
<button className="primary-btn">GET NOTIFIED →</button>
</div>

<div className="launch-note">LAUNCHING NATIONWIDE</div>
</div>
</div>
</section>

<section className="features">
<div className="feature">REAL JUICE & NATURAL FLAVORS</div>
<div className="feature">READY TO POUR. READY TO ENJOY.</div>
<div className="feature">BUILT FOR RETAIL & DISTRIBUTION</div>
<div className="feature">A DECADE OF QUALITY & TRUST</div>
</section>

<section className="notify">
<div className="notify-left">
<h2>BE PART OF THE JOURNEY</h2>
<p>
Join the community as we continue to grow from a legacy brand into a
national name.
</p>
</div>

<div className="notify-right">
<input type="email" placeholder="Enter your email" />
<button>GET NOTIFIED</button>
</div>
</section>

<footer className="footer">
<div>© 2011 — 2026 My Drink Family • All Rights Reserved</div>
<div>21+ • PLEASE DRINK RESPONSIBLY</div>
</footer>
</main>
);
}
