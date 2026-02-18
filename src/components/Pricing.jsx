import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import { SectionLabel, GoldRule, SectionTitle } from "./shared/UI.jsx";
import { PRICING, TABS } from "../constants/index.js";

function PriceCard({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered || card.featured ? "var(--gold)" : "rgba(201,168,76,0.15)"}`,
        padding: "40px 32px",
        position: "relative",
        background: card.featured
          ? "linear-gradient(135deg,#141006 0%,#0a0a0a 100%)"
          : "var(--black)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Featured tag */}
      {card.tag && (
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 24,
            background: "var(--gold)",
            color: "var(--black)",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            padding: "5px 12px",
            transform: "translateY(-50%)",
          }}
        >
          {card.tag}
        </span>
      )}

      {/* Name */}
      <div
        style={{
          fontFamily: "var(--display)",
          fontSize: 28,
          letterSpacing: 1,
          color: "var(--white)",
          marginBottom: 8,
        }}
      >
        {card.name}
      </div>

      {/* Price */}
      <div
        style={{
          fontFamily: "var(--serif)",
          fontSize: 48,
          color: "var(--gold)",
          lineHeight: 1,
          margin: "16px 0",
        }}
      >
        <span style={{ fontSize: 20, verticalAlign: "top", lineHeight: 1.6 }}>$</span>
        {card.price}
        {card.suffix && <span style={{ fontSize: 16 }}>{card.suffix}</span>}
      </div>

      {/* Description */}
      <div
        style={{ fontSize: 13, color: "var(--gray)", lineHeight: 1.8, marginBottom: 24 }}
      >
        {card.desc}
      </div>

      {/* Features */}
      <ul style={{ listStyle: "none" }}>
        {card.features.map((f) => (
          <li
            key={f}
            style={{
              fontSize: 13,
              color: "var(--lgray)",
              padding: "8px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ color: "var(--gold)", fontSize: 8, flexShrink: 0 }}>✦</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  const ref = useReveal();
  const [activeTab, setActiveTab] = useState("automotive");

  return (
    <section
      id="pricing"
      ref={ref}
      className="reveal"
      style={{ padding: "100px 60px", background: "var(--dark)" }}
    >
      {/* <SectionLabel>Investment</SectionLabel> */}
      <GoldRule />
      <SectionTitle>PRICING</SectionTitle>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 60, flexWrap: "wrap" }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              padding: "12px 24px",
              fontSize: 10,
              letterSpacing: 3,
              textTransform: "uppercase",
              border: "1px solid",
              borderColor: activeTab === t.id ? "var(--gold)" : "rgba(201,168,76,0.2)",
              background: activeTab === t.id ? "var(--gold)" : "transparent",
              color: activeTab === t.id ? "var(--black)" : "var(--gray)",
              cursor: "pointer",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              if (activeTab !== t.id) {
                e.target.style.background = "var(--gold)";
                e.target.style.color = "var(--black)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== t.id) {
                e.target.style.background = "transparent";
                e.target.style.color = "var(--gray)";
              }
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 24,
        }}
      >
        {PRICING[activeTab].map((card, i) => (
          <PriceCard key={i} card={card} />
        ))}
      </div>
    </section>
  );
}
