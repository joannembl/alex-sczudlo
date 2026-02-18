import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import { SectionLabel, SectionTitle } from "./shared/UI.jsx";
import { IgIcon } from "./shared/Icons.jsx";

const IG_HANDLE = "automotive_alex";
const IG_URL = `https://instagram.com/${IG_HANDLE}`;

export default function Instagram() {
  const ref = useReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="instagram"
      ref={ref}
      className="reveal"
      style={{ padding: "100px 60px", background: "var(--black)" }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 48,
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div>
          <SectionLabel>Follow Along</SectionLabel>
          <SectionTitle style={{ marginBottom: 0 }}>ON INSTAGRAM</SectionTitle>
        </div>
        <a
          href={IG_URL}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--serif)",
            fontSize: 20,
            color: "var(--gold)",
          }}
        >
          <IgIcon size={24} color="var(--gold)" />
          @{IG_HANDLE}
        </a>
      </div>

      {/* Photo grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 4 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <a
            key={i}
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              aspectRatio: "1",
              background: "var(--mid)",
              position: "relative",
              overflow: "hidden",
              display: "block",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg,#1a1a1a,#222)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.4s ease",
                transform: hovered === i ? "scale(1.06)" : "scale(1)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "repeating-linear-gradient(45deg,transparent,transparent 15px,rgba(201,168,76,0.04) 15px,rgba(201,168,76,0.04) 16px)",
                }}
              />
            </div>
            {/* Hover overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(201,168,76,0.15)",
                opacity: hovered === i ? 1 : 0,
                transition: "opacity 0.3s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IgIcon size={24} color="var(--gold)" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
