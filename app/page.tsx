export default function Page() {
return (
<main style={{
fontFamily: "serif",
background: "#0b0b0b",
color: "white",
minHeight: "100vh"
}}>

{/* HERO SECTION */}
<section style={{
backgroundImage: "url('/hero-mymosa.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
padding: "120px 20px",
textAlign: "left"
}}>
<div style={{maxWidth: "1200px", margin: "auto"}}>

<h1 style={{
fontSize: "64px",
fontWeight: "bold",
lineHeight: "1.1",
marginBottom: "20px"
}}>
THE ORIGINAL <br/> MIMOSA IN A CAN
</h1>

<p style={{
fontSize: "22px",
marginBottom: "20px"
}}>
Real Juice. Real Flavor. Since 2011.
</p>

<p style={{
maxWidth: "500px",
marginBottom: "40px",
opacity: "0.9"
}}>
Crafted with real juice, wine, and natural flavors for the perfect
brunch cocktail experience anywhere.
</p>

<button style={{
background: "#c8a36a",
border: "none",
padding: "16px 30px",
fontSize: "18px",
cursor: "pointer"
}}>
GET NOTIFIED →
</button>

</div>
</section>


{/* FLAVOR SECTION */}

<section style={{
padding: "80px 20px",
textAlign: "center"
}}>
<h2 style={{
fontSize: "40px",
marginBottom: "40px"
}}>
The Flagship Four
</h2>

<p>
Classic Orange • Pineapple • Tropical • Strawberry
</p>
</section>


{/* EMAIL SECTION */}

<section style={{
padding: "80px 20px",
textAlign: "center",
background: "#111"
}}>
<h2 style={{
fontSize: "36px",
marginBottom: "20px"
}}>
Be First to Know
</h2>

<p style={{marginBottom: "30px"}}>
Join the My Drink Family for launch updates and nationwide releases.
</p>

<input
placeholder="Enter your email"
style={{
padding: "14px",
width: "280px",
marginRight: "10px"
}}
/>

<button style={{
padding: "14px 24px",
background: "#c8a36a",
border: "none"
}}>
Join
</button>

</section>

</main>
)
}
