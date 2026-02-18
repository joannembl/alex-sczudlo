import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal.js";
import { SectionLabel, GoldRule, SectionTitle } from "./shared/UI.jsx";
import ProfilePhoto from '../photos/profile/AstonMartin.jpg';

const stats = [
  // ["9", "Years Experience"],
  // ["6", "Publications"],
  // ["500+", "Sessions"],
];

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

export default function About() {
  const ref = useReveal();
  const isMobile = useIsMobile();

  return (
    <section
      id="about"
      ref={ref}
      className="reveal"
      style={{
        padding: isMobile ? "60px 24px" : "100px 60px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? 40 : 80,
        alignItems: "center",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            paddingBottom: isMobile ? "100%" : "120%",
            background: "linear-gradient(135deg,#1c1c1c 0%,#2a2a2a 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={ProfilePhoto}
            alt="Alex - Automotive Photographer"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
            }}
          />
        </div>
        {/* Decorative border accent — hide on mobile to avoid clipping */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              bottom: -20,
              right: -20,
              width: "60%",
              height: "60%",
              border: "1px solid rgba(201,168,76,0.3)",
              zIndex: -1,
            }}
          />
        )}
      </div>

      {/* Text content */}
      <div>
        <SectionLabel>About the Photographer</SectionLabel>
        <GoldRule />
        <SectionTitle style={{ fontSize: isMobile ? "clamp(32px,8vw,52px)" : undefined }}>
          BEHIND THE LENS
        </SectionTitle>
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: isMobile ? 16 : 18,
            fontWeight: 300,
            color: "var(--lgray)",
            lineHeight: 1.8,
          }}
        >
          Alex Sczudlo is an automotive photographer based in Scottsdale, Arizona,
          renowned for her vibrant imagery and a particular fondness for yellow cars.
          She has been actively creating content for both individuals and organizations since December 2017,
          capturing the essence of automotive culture through her lens.
          <br /><br />
          Her work has been featured in notable publications, including Porsche.com,
          where she was recognized as a top creator of 2023 in the article "Carrera Me Away."
          Additionally, her photography has appeared in the DuPont Registry, covering events
          like the 2020 Apollo IE US Tour and the 2019 Barrett-Jackson Auction,
          as well as being highlighted in their 2023 Best 10 Photos of Car Week and
          2024 Best Accounts to be Following for Car Week. Forbes has also showcased her work in their Huracán Evo review.
          <br /><br />
          Beyond automotive events, Alex has extensive experience covering rallies, shows, and private photoshoots.
          Her expertise also extends to portrait and product photography.
          Her business and journey have been profiled in publications such as Voyage Phoenix, Canvas Rebel, and Bold Journey.
        </p>

        {/* Stats */}
        {stats.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(stats.length, 3)}, 1fr)`,
              gap: isMobile ? 16 : 24,
              marginTop: 48,
              borderTop: "1px solid rgba(201,168,76,0.15)",
              paddingTop: 40,
            }}
          >
            {stats.map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontSize: isMobile ? 32 : 42,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "var(--gray)",
                    marginTop: 4,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
