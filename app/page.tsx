export default function Page() {
return (
<main className="landing-page">
<picture>
<source media="(max-width: 900px)" srcSet="/hero-mymosa-mobile.png" />
<img
src="/hero-mymosa.png"
alt="My Drink Family coming soon"
className="hero-image"
/>
</picture>
</main>
);
}
