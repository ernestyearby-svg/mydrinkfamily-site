export default function Page() {
return (
<main className="landing-page">
<section className="hero hero1">
<picture>
<source media="(max-width: 900px)" srcSet="/hero-mymosa-mobile.png" />
<img
src="/hero-mymosa.png"
alt="My Drink Family original four flavors"
className="hero-image"
/>
</picture>
</section>

<section className="hero hero2">
<picture>
<source
media="(max-width: 900px)"
srcSet="/hero-mymosa-wave2-mobile.png"
/>
<img
src="/hero-mymosa-wave2.png"
alt="My Drink Family second wave flavors"
className="hero-image"
/>
</picture>
</section>
</main>
);
}
