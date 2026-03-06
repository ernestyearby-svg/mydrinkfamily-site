export default function Page() {
return (
<main
style={{
minHeight: "100vh",
width: "100%",
backgroundColor: "#000",
backgroundImage: "url('/hero-mymosa.png')",
backgroundSize: "cover",
backgroundPosition: "center top",
backgroundRepeat: "no-repeat",
display: "flex",
alignItems: "flex-end",
}}
>
<div
style={{
width: "100%",
background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.82) 55%, rgba(0,0,0,0.96) 100%)",
padding: "32px 24px",
}}
>
<div
style={{
maxWidth: "1200px",
margin: "0 auto",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
gap: "20px",
flexWrap: "wrap",
color: "#f3e7d6",
fontFamily: 'Georgia, "Times New Roman", serif',
}}
>
<div>
<div
style={{
fontSize: "28px",
letterSpacing: "0.08em",
marginBottom: "8px",
}}
>
MY DRINK FAMILY
</div>

<div
style={{
fontSize: "14px",
letterSpacing: "0.28em",
color: "#d7ab67",
marginBottom: "14px",
}}
>
EST. 2011
</div>

<div
style={{
fontSize: "18px",
lineHeight: 1.6,
maxWidth: "640px",
}}
>
A new digital home is on the way.
<br />
The original mimosa in a can returns soon.
</div>
</div>

<div
style={{
fontSize: "14px",
letterSpacing: "0.18em",
color: "#d7ab67",
whiteSpace: "nowrap",
}}
>
COMING SOON
</div>
</div>
</div>
</main>
);
}
