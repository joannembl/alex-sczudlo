import { useState } from "react";
import { IgIcon, MailIcon } from "./shared/Icons.jsx";

const iconBtnStyle = (hovered) => ({
  width: 40,
  height: 40,
  border: "1px solid",
  borderColor: hovered ? "var(--gold)" : "rgba(201,168,76,0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: hovered ? "var(--black)" : "var(--gray)",
  background: hovered ? "var(--gold)" : "transparent",
  transition: "all 0.3s",
  cursor: "pointer",
});

export default function Footer() {
  const [igHover, setIgHover] = useState(false);
  const [mailHover, setMailHover] = useState(false);

  return (
    <footer
      style={{
        background: "var(--black)",
        borderTop: "1px solid rgba(201,168,76,0.12)",
        padding: "36px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <p style={{ fontSize: 12, letterSpacing: 1, color: "var(--gray)" }}>
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "var(--gold)" }}>Alex Sczudlo</span>. All rights
        reserved.
      </p>

      <div style={{ display: "flex", gap: 12 }}>
        {/* Instagram */}
        <a
          href="https://instagram.com/automotive_alex"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setIgHover(true)}
          onMouseLeave={() => setIgHover(false)}
          style={iconBtnStyle(igHover)}
          title="Instagram"
        >
          <IgIcon size={18} />
        </a>

        {/* Email */}
        <a
          href="mailto:hello@automotivealex.com"
          onMouseEnter={() => setMailHover(true)}
          onMouseLeave={() => setMailHover(false)}
          style={iconBtnStyle(mailHover)}
          title="Email"
        >
          <MailIcon size={18} />
        </a>
      </div>
    </footer>
  );
}
