import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0f0f0f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top — availability badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              color: "#6b7280",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Open to Work · Product Analyst
          </span>
        </div>

        {/* Middle — name + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "88px",
              fontWeight: 800,
              color: "#ededed",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Prasanna</span>
            <span>Pingale</span>
          </div>

          <p
            style={{
              fontSize: "24px",
              color: "#6b7280",
              lineHeight: 1.5,
              maxWidth: "720px",
              margin: 0,
            }}
          >
            Turning user behavior, funnels, and data into clear product
            decisions and measurable business impact.
          </p>
        </div>

        {/* Bottom — URL + accent line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {["SQL", "Python", "Amplitude", "A/B Testing"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "13px",
                  color: "#2563eb",
                  border: "1px solid rgba(37,99,235,0.3)",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  background: "rgba(37,99,235,0.08)",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <span
            style={{
              fontSize: "16px",
              color: "#4b5563",
              letterSpacing: "0.05em",
            }}
          >
            prasannapingale.vercel.app
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
