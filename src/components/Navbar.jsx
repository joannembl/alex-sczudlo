import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* ─── Hook: detect mobile breakpoint ──────────────────────── */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

export default function Navbar({ mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile, setMobileOpen]);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: scrolled ? "14px 60px" : "20px 60px",
    background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
    transition: "all 0.4s ease",
  };

  const linkStyle = {
    fontFamily: "var(--display)",   // ← change from var(--body) to var(--display)
    fontSize: 14,                    // ← slightly larger to match
    letterSpacing: "4px",            // ← wider spacing
    textTransform: "uppercase",
    color: "var(--lgray)",
    cursor: "pointer",
    transition: "color 0.25s",
    background: "none",
    border: "none",
  };

  const navLinks = [
    { to: "/about", label: "About"     },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/pricing", label: 'Pricing' },
    { to: "/discounts", label: "Discounts" },
    { to: "/contact", label: "Contact"   },
  ];

  const mobileLinks = [
    { to: "/about", label: "About"     },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/pricing", label: 'Pricing' },
    { to: "/discounts", label: "Discounts" },
    { to: "/contact", label: "Contact"   },
  ];

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "var(--display)",
            fontSize: isMobile ? 20 : 28,
            letterSpacing: 3,
            color: "var(--gold)"
          }}
        >
          Alex Sczudlo
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={{ display: "flex", gap: 36, listStyle: "none", alignItems: "center" }}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                key={to}
                to={to}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--lgray)")}
              >
                {label}
              </Link>
            </li>
          ))}
          </ul>
        )}

        {/* Hamburger — only on mobile */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              zIndex: 1000,
            }}
            aria-label="Toggle menu"
          >
            {/* Animate bars into X when open */}
            <span style={{
              display: "block", width: 26, height: 2,
              background: "var(--gold)",
              transition: "all 0.3s ease",
              transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: 26, height: 2,
              background: "var(--gold)",
              transition: "all 0.3s ease",
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 26, height: 2,
              background: "var(--gold)",
              transition: "all 0.3s ease",
              transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }} />
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 998,
            background: "rgba(10,10,10,0.98)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
            animation: "fadeIn 0.2s ease",
          }}
        >
          {mobileLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--display)",
                fontSize: 36,
                letterSpacing: 4,
                color: "var(--white)",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white)")}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://instagram.com/automotive_alex"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "var(--display)",
              fontSize: 36,
              letterSpacing: 4,
              color: "var(--white)",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--white)")}
          >
            Instagram
          </a>
        </div>
      )}
    </>
  );
}
