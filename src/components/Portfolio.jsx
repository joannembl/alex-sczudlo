import { useState, useRef, useEffect, useCallback } from "react";
import useReveal from "../hooks/useReveal.js";
import { SectionLabel, GoldRule, SectionTitle } from "./shared/UI.jsx";
import { PORTFOLIO_ITEMS } from "../constants/index.js";

export default function Portfolio() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [lightbox, setLightbox] = useState(null); // null = closed, number = open
  const dragStart = useRef(null);
  const total = PORTFOLIO_ITEMS.length;

  // ── Auto-advance (8 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      if (!dragging) setActive((prev) => (prev + 1) % total);
    }, 8000);
    return () => clearInterval(timer);
  }, [dragging, total]);

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  // ── Drag / swipe
  const onDragStart = (e) => {
    dragStart.current = e.clientX ?? e.touches?.[0]?.clientX;
    setDragging(true);
  };
  const onDragEnd = (e) => {
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX;
    if (dragStart.current !== null && endX !== undefined) {
      const diff = dragStart.current - endX;
      if (diff > 40) next();
      else if (diff < -40) prev();
    }
    dragStart.current = null;
    setDragging(false);
  };

  const getSlideIndex = (offset) => (active + offset + total) % total;

  // ── Lightbox open / close
  const openLightbox = (index) => {
    setLightbox(index);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const lightboxPrev = useCallback(() =>
    setLightbox((i) => (i - 1 + total) % total), [total]);
  const lightboxNext = useCallback(() =>
    setLightbox((i) => (i + 1) % total), [total]);

  // ── Keyboard nav for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape")      closeLightbox();
      if (e.key === "ArrowRight")  lightboxNext();
      if (e.key === "ArrowLeft")   lightboxPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, lightboxNext, lightboxPrev]);

  return (
    <>
      <section
        id="portfolio"
        ref={ref}
        className="reveal"
        style={{ padding: "100px 0", background: "var(--dark)", overflow: "hidden" }}
      >
        {/* Section header */}
        <div style={{ padding: "0 60px", marginBottom: 60 }}>
          <SectionLabel>Selected Work</SectionLabel>
          <GoldRule />
          <div style={{
            display: "flex", alignItems: "flex-end",
            justifyContent: "space-between", flexWrap: "wrap", gap: 20,
          }}>
            <SectionTitle style={{ marginBottom: 0 }}>PORTFOLIO</SectionTitle>
            <span style={{
              fontFamily: "var(--display)", fontSize: 48,
              color: "rgba(201,168,76,0.2)", lineHeight: 1, letterSpacing: 2,
            }}>
              {String(active + 1).padStart(2, "0")}
              <span style={{ fontSize: 20, color: "rgba(201,168,76,0.15)" }}>
                /{String(total).padStart(2, "0")}
              </span>
            </span>
          </div>
        </div>

        {/* Carousel stage */}
        <div
          style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: 16,
            padding: "0 60px",
            userSelect: "none",
            cursor: dragging ? "grabbing" : "grab",
          }}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={onDragStart}
          onTouchEnd={onDragEnd}
        >
          {/* Prev ghost */}
          <div
            onClick={prev}
            style={{
              flex: "0 0 22%", maxWidth: 220,
              aspectRatio: "2/3", position: "relative",
              overflow: "hidden", cursor: "pointer",
              opacity: 0.4, transform: "scale(0.92)",
              transition: "all 0.5s ease", flexShrink: 0,
            }}
          >
            <SlideImage item={PORTFOLIO_ITEMS[getSlideIndex(-1)]} />
          </div>

          {/* Active slide */}
          <div
            onClick={() => openLightbox(active)}
            style={{
              flex: "0 0 42%", maxWidth: 420,
              aspectRatio: "2/3", position: "relative",
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
              border: "1px solid rgba(201,168,76,0.2)",
              transition: "all 0.5s ease", flexShrink: 0,
              cursor: "zoom-in",
            }}
          >
            <SlideImage item={PORTFOLIO_ITEMS[active]} active />

            {/* Label overlay */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(to top,rgba(0,0,0,0.85) 0%,transparent 60%)",
              padding: "40px 28px 24px",
              pointerEvents: "none",
            }}>
              <span style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: "var(--gold)" }}>
                {PORTFOLIO_ITEMS[active].label}
              </span>
            </div>

            {/* Zoom hint */}
            <div style={{
              position: "absolute", top: 16, right: 16,
              width: 32, height: 32,
              border: "1px solid rgba(201,168,76,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "rgba(201,168,76,0.7)", fontSize: 14,
              pointerEvents: "none",
            }}>
              ⤢
            </div>
          </div>

          {/* Next ghost */}
          <div
            onClick={next}
            style={{
              flex: "0 0 22%", maxWidth: 220,
              aspectRatio: "2/3", position: "relative",
              overflow: "hidden", cursor: "pointer",
              opacity: 0.4, transform: "scale(0.92)",
              transition: "all 0.5s ease", flexShrink: 0,
            }}
          >
            <SlideImage item={PORTFOLIO_ITEMS[getSlideIndex(1)]} />
          </div>
        </div>

        {/* Controls */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: 32,
          marginTop: 48, padding: "0 60px",
        }}>
          <NavBtn onClick={prev}>←</NavBtn>

          {/* Dot indicators */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {PORTFOLIO_ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 28 : 8, height: 2,
                  background: i === active ? "var(--gold)" : "rgba(201,168,76,0.25)",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.35s ease",
                }}
              />
            ))}
          </div>

          <NavBtn onClick={next}>→</NavBtn>
        </div>

        {/* Click hint */}
        <p style={{
          textAlign: "center", marginTop: 20,
          fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
          color: "rgba(201,168,76,0.3)",
        }}>
          Click photo to enlarge
        </p>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
            animation: "fadeIn 0.2s ease",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Image container — stop propagation so clicking image doesn't close */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <img
              src={PORTFOLIO_ITEMS[lightbox].src}
              alt={PORTFOLIO_ITEMS[lightbox].label}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                display: "block",
                boxShadow: "0 40px 120px rgba(0,0,0,0.8)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            />

            {/* Label */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(to top,rgba(0,0,0,0.8),transparent)",
              padding: "32px 24px 16px",
            }}>
              <span style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: "var(--gold)" }}>
                {PORTFOLIO_ITEMS[lightbox].label}
              </span>
              <span style={{ float: "right", fontSize: 10, letterSpacing: 2, color: "var(--gray)" }}>
                {String(lightbox + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: "fixed", top: 24, right: 28,
              background: "none", border: "1px solid rgba(201,168,76,0.3)",
              color: "var(--gold)", fontSize: 20, cursor: "pointer",
              width: 44, height: 44,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--black)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--gold)"; }}
          >
            ✕
          </button>

          {/* Lightbox prev */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            style={{
              position: "fixed", left: 20, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "1px solid rgba(201,168,76,0.3)",
              color: "var(--gold)", fontSize: 20, cursor: "pointer",
              width: 48, height: 48,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--black)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--gold)"; }}
          >
            ←
          </button>

          {/* Lightbox next */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            style={{
              position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "1px solid rgba(201,168,76,0.3)",
              color: "var(--gold)", fontSize: 20, cursor: "pointer",
              width: 48, height: 48,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--black)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--gold)"; }}
          >
            →
          </button>

          {/* Keyboard hint */}
          <p style={{
            position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)",
            fontSize: 10, letterSpacing: 3, textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)", whiteSpace: "nowrap",
          }}>
            ← → to navigate &nbsp;·&nbsp; ESC to close
          </p>
        </div>
      )}
    </>
  );
}

/* ─── Reusable nav button ──────────────────────────────────── */
function NavBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 48, height: 48,
        border: "1px solid rgba(201,168,76,0.3)",
        background: "transparent", color: "var(--gold)",
        cursor: "pointer", fontSize: 18,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.25s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--black)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
    >
      {children}
    </button>
  );
}

/* ─── Single slide image ───────────────────────────────────── */
function SlideImage({ item, active }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg,#1a1a1a,#252525)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "repeating-linear-gradient(-45deg,transparent,transparent 30px,rgba(201,168,76,0.03) 30px,rgba(201,168,76,0.03) 31px)",
          }} />
          <span style={{ fontSize: 10, letterSpacing: 3, color: "rgba(255,255,255,0.1)" }}>
            {item.label?.toUpperCase()}
          </span>
        </div>
      )}
      {item.src && (
        <img
          src={item.src}
          alt={item.label}
          onLoad={() => setLoaded(true)}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease, transform 0.6s ease",
            transform: active ? "scale(1.03)" : "scale(1)",
          }}
        />
      )}
    </>
  );
}
