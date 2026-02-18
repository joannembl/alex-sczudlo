export const SectionLabel = ({ children }) => (
  <p
    style={{
      fontSize: 10,
      letterSpacing: 5,
      textTransform: "uppercase",
      color: "var(--gold)",
      marginBottom: 16,
    }}
  >
    {children}
  </p>
);

export const GoldRule = () => (
  <div
    style={{
      width: 60,
      height: 2,
      background: "var(--gold)",
      marginBottom: 32,
    }}
  />
);

export const SectionTitle = ({ children, style }) => (
  <h2
    style={{
      fontFamily: "var(--display)",
      fontSize: "clamp(40px,6vw,72px)",
      lineHeight: 1,
      color: "var(--white)",
      marginBottom: 24,
      ...style,
    }}
  >
    {children}
  </h2>
);

export const Btn = ({ children, outline, href, onClick, style }) => {
  const base = {
    display: "inline-block",
    padding: "14px 36px",
    fontFamily: "var(--body)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 3,
    textTransform: "uppercase",
    border: "1px solid var(--gold)",
    background: outline ? "transparent" : "var(--gold)",
    color: outline ? "var(--gold)" : "var(--black)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    ...style,
  };

  if (href) return <a href={href} onClick={onClick} style={base}>{children}</a>;
  return <button onClick={onClick} style={base}>{children}</button>;
};

