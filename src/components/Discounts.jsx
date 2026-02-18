import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import { SectionLabel, GoldRule, SectionTitle } from "./shared/UI.jsx";
import { DISCOUNTS } from "../constants/index.js";

export default function Discounts() {
  const ref = useReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="discounts"
      ref={ref}
      className="reveal"
      style={{ padding: "100px 60px", background: "var(--black)" }}
    >
      {/* <SectionLabel>Special Offers</SectionLabel> */}
      <GoldRule />
      <SectionTitle>DISCOUNTS</SectionTitle>
      <p
        style={{
          fontFamily: "var(--serif)",
          fontSize: 18,
          fontWeight: 300,
          color: "var(--lgray)",
          maxWidth: 640,
        }}
      >
        Below you can find links for discounts to a variety of buisnesses I have partnered with and my gear recommendations
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 24,
          marginTop: 60,
        }}
      >
        {DISCOUNTS.map((d, i) => (
          <a
            href={d.link}
            target="_blank"
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              padding: 40,
              border: `1px solid ${
                hovered === i ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.12)"
              }`,
              position: "relative",
              overflow: "hidden",
              background: "var(--mid)",
              transition: "border-color 0.3s",
            }} rel="noreferrer"
          >
            <span
              style={{
                display: "inline-block",
                background: "var(--gold)",
                color: "var(--black)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                padding: "5px 14px",
                marginBottom: 16,
              }}
            >
              {d.badge}
            </span>
            <div
              style={{
                fontFamily: "var(--display)",
                fontSize: 26,
                color: "var(--white)",
                marginBottom: 12,
              }}
            >
              {d.title}
            </div>
            <div style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.8 }}>{d.desc}</div>
            <div style={{ fontSize: 15, color: "var(--white)", lineHeight: 1.8 }}>{d.code ? `DISCOUNT CODE: ${d.code}` : ''}</div>
            {/* Decorative large percentage */}
            <div
              style={{
                fontFamily: "var(--display)",
                fontSize: 72,
                color: "rgba(201,168,76,0.15)",
                lineHeight: 1,
                position: "absolute",
                bottom: 16,
                right: 20,
                pointerEvents: "none",
              }}
            >
              {d.pct}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
