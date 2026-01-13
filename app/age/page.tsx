"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AgeGatePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleYes() {
    setLoading(true);
    try {
      await fetch("/api/age", { method: "POST" });
      router.replace("/");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  function handleNo() {
    window.location.href = "https://www.google.com";
  }

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ maxWidth: 520, width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: 32, marginBottom: 12 }}>Age Verification</h1>
        <p style={{ opacity: 0.8, marginBottom: 24 }}>
          Are you 21 years of age or older?
        </p>

        <div style={{ display: "grid", gap: 12 }}>
          <button
            onClick={handleYes}
            disabled={loading}
            style={{ padding: 14, fontSize: 16, cursor: "pointer" }}
          >
            {loading ? "Verifying…" : "YES — Enter"}
          </button>

          <button
            onClick={handleNo}
            style={{ padding: 14, fontSize: 16, cursor: "pointer" }}
          >
            NO — Exit
          </button>
        </div>
      </div>
    </main>
  );
}
