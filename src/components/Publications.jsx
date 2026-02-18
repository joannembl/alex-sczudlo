import useReveal from "../hooks/useReveal.js";
import { PUBLICATIONS } from "../constants/index.js";

export default function Publications() {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        padding: "60px",
        background: "var(--mid)",
        borderTop: "1px solid rgba(201,168,76,0.12)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: 10,
          letterSpacing: 5,
          textTransform: "uppercase",
          color: "var(--gray)",
          marginBottom: 40,
        }}
      >
        As Featured &amp; Published In
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px 60px",
        }}
      >
        {PUBLICATIONS.map((pub) => (
          <span
            key={pub}
            style={{
              fontFamily: "var(--display)",
              fontSize: 22,
              letterSpacing: 3,
              color: "rgba(255,255,255,0.25)",
              cursor: "default",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.25)")}
          >
            {pub}
          </span>
        ))}
      </div>
    </div>
  );
}
