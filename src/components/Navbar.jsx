import { useState, useEffect } from "react";
import { TABS } from "../constants/index.js";
import scrollTo from "../utils/scrollTo.js";

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
  const [dropOpen, setDropOpen] = useState(false);
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
    fontFamily: "var(--body)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "var(--lgray)",
    cursor: "pointer",
    transition: "color 0.25s",
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#discounts", label: "Discounts" },
    { href: "#contact", label: "Contact" },
  ];

  const mobileLinks = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#discounts", label: "Discounts" },
    { href: "#contact", label: "Contact" },
  ];

  // const scrollTo = (e) => {
  //   e.preventDefault();
  //   const id = e.currentTarget.getAttribute("href").replace("#", "");
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  //   setMobileOpen(false);
  // };

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <a
          href="#hero"
          onClick={scrollTo}
          style={{
            fontFamily: "var(--display)",
            fontSize: isMobile ? 20 : 28,
            letterSpacing: 3,
            color: "var(--gold)",
            flexShrink: 0,
          }}
        >
          Alex Sczudlo
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={{ display: "flex", gap: 36, listStyle: "none", alignItems: "center" }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={scrollTo}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--lgray)")}
                >
                  {label}
                </a>
              </li>
            ))}

            {/* Pricing dropdown */}
            {/* <li
              style={{ position: "relative" }}
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <a
                href="#pricing"
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--lgray)")}
              >
                Pricing ▾
              </a>
              {dropOpen && (
                <ul
                  style={{
                    position: "absolute",
                    top: 28,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(17,17,17,0.98)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    minWidth: 220,
                    padding: "10px 0",
                    listStyle: "none",
                    zIndex: 100,
                  }}
                >
                  {TABS.map((t) => (
                    <li key={t.id}>
                      <a
                        href="#pricing"
                        style={{
                          display: "block",
                          padding: "10px 22px",
                          fontSize: 11,
                          letterSpacing: 2,
                          textTransform: "uppercase",
                          color: "var(--lgray)",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = "var(--gold)";
                          e.target.style.background = "rgba(201,168,76,0.06)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = "var(--lgray)";
                          e.target.style.background = "transparent";
                        }}
                      >
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li> */}
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
          {mobileLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
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
              {label}
            </a>
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
