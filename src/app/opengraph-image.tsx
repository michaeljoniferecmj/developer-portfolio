import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Michael | Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(to right, transparent, #6366f1, #818cf8, transparent)",
          }}
        />

        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Name */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 4,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Michael
          </span>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#6366f1",
              marginBottom: 8,
            }}
          />
        </div>

        {/* Title */}
        <span
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 12,
          }}
        >
          Full-Stack Developer
        </span>

        {/* Divider */}
        <div
          style={{
            width: 200,
            height: 1,
            backgroundColor: "#334155",
            marginTop: 40,
            marginBottom: 40,
          }}
        />

        {/* Tagline */}
        <span
          style={{
            fontSize: 20,
            color: "#64748b",
          }}
        >
          Modern Web Apps · AI-Powered Tools · Business Systems
        </span>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(to right, transparent, #6366f1, #818cf8, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
