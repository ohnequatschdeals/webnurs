"use client";
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  console.error(error);
  return (
    <html>
      <body style={{ background: "#0E0F1A", color: "#D8D8D8", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ maxWidth: 800, margin: "80px auto", padding: 24, border: "1px solid rgba(216,216,216,0.15)", borderRadius: 16 }}>
          <h1 style={{ fontSize: 24, marginBottom: 12 }}>Es ist etwas schiefgelaufen.</h1>
          <p style={{ opacity: 0.8, marginBottom: 16 }}>{error.message}</p>
          <button
            onClick={() => reset()}
            style={{ padding: "10px 16px", borderRadius: 10, border: "1px solid rgba(216,216,216,0.25)", background: "transparent", color: "#D8D8D8", cursor: "pointer" }}
          >
            Seite neu laden
          </button>
        </div>
      </body>
    </html>
  );
}
