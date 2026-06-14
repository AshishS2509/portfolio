import { siteUrl } from "@/lib/utils";
import { ImageResponse } from "next/og";

// Required exports — Next.js reads these to write the <meta> tags
export const alt = "Ashish Solanki — Tech Consultant & Full Stack Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#0a0a0a",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top: availability badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#22c55e",
          }}
        />
        <span
          style={{
            fontSize: "16px",
            color: "#22c55e",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Available for Freelance
        </span>
      </div>

      {/* Middle: name + title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontSize: "72px",
            fontWeight: "700",
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Ashish Solanki
        </span>
        <span
          style={{
            fontSize: "28px",
            color: "#a1a1aa",
            fontWeight: "400",
            letterSpacing: "-0.01em",
          }}
        >
          Tech Consultant & Full Stack Developer
        </span>
      </div>

      {/* Bottom: capability tags + domain */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            "Web & Mobile",
            "AI Chatbots",
            "WhatsApp Bots",
            "SEO",
            "API Integrations",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                border: "1px solid #27272a",
                backgroundColor: "#18181b",
                color: "#a1a1aa",
                fontSize: "14px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        <span
          style={{
            fontSize: "16px",
            color: "#52525b",
          }}
        >
          {siteUrl.toString()}
        </span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
