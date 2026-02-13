"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui", padding: "2rem", background: "#0a0a0a", color: "#fafafa" }}>
        <div style={{ maxWidth: "32rem", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Something went wrong</h1>
          <p style={{ color: "#a1a1aa", marginBottom: "1.5rem" }}>
            The app failed to load. Try refreshing the page.
          </p>
          <button
            onClick={reset}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              background: "#f97316",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
