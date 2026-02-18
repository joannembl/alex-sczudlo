import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal.js";
import { SectionLabel, GoldRule, SectionTitle, Btn } from "./shared/UI.jsx";
import { IgIcon, MailIcon, PhoneIcon, PinIcon, StarIcon } from "./shared/Icons.jsx";
import emailjs from "@emailjs/browser";

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

const getInputStyle = (isMobile) => ({
  background: "var(--black)",
  border: "1px solid rgba(201,168,76,0.15)",
  color: "var(--cream)",
  padding: isMobile ? "12px 14px" : "14px 18px",
  fontFamily: "var(--body)",
  fontSize: isMobile ? 16 : 14, // 16px prevents iOS auto-zoom on focus
  outline: "none",
  width: "100%",
  transition: "border-color 0.25s",
});

const LABEL_STYLE = {
  fontSize: 10,
  letterSpacing: 3,
  textTransform: "uppercase",
  color: "var(--gray)",
};

const SERVICE_OPTIONS = [
  "Automotive Photography",
  "Portrait / Event / Product",
  "Photoshoot Subscription",
  "Fine Art Prints",
  "Other",
];

const CONTACT_INFO = [
  {
    icon: <MailIcon />,
    label: "Email",
    content: (
      <a
        href="mailto:automotivealex5@gmail.com"
        style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--lgray)" }}
      >
        automotivealex5@gmail.com
      </a>
    ),
  },
  {
    icon: <PhoneIcon />,
    label: "Phone",
    content: (
      <a
        href="tel:+18055707277"
        style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--lgray)" }}
      >
        (805) 570-7277
      </a>
    ),
  },
  {
    icon: <IgIcon />,
    label: "Instagram",
    content: (
      <a
        href="https://instagram.com/automotive_alex"
        target="_blank"
        rel="noreferrer"
        style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--lgray)" }}
      >
        @automotive_alex
      </a>
    ),
  },
  {
    icon: <PinIcon />,
    label: "Based In",
    content: (
      <span style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--lgray)" }}>
        Scottsdale, Arizona
      </span>
    ),
  },
];

export default function Contact() {
  const ref = useReveal();
  const isMobile = useIsMobile();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const INPUT_STYLE = getInputStyle(isMobile);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    emailjs.sendForm(
      "service_t7j1jnh",
      "template_z195r1e",
      e.target,
      "LIC7o3pGr7b9bK2pb"
    ).then(() => {
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 4000);
    }).catch(() => {
      setError(true);
      setTimeout(() => setError(false), 4000);
    });
  };

  const handleFocus = (e) => (e.target.style.borderColor = "var(--gold)");
  const handleBlur  = (e) => (e.target.style.borderColor = "rgba(201,168,76,0.15)");

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal"
      style={{
        padding: isMobile ? "60px 24px" : "100px 60px",
        background: "var(--dark)",
      }}
    >
      <SectionLabel>Get In Touch</SectionLabel>
      <GoldRule />
      <SectionTitle>CONTACT</SectionTitle>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 48 : 80,
          marginTop: 60,
        }}
      >
        {/* ── Form ── */}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          {/* Name */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={LABEL_STYLE}>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Jane Smith"
              required
              style={INPUT_STYLE}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {/* Email */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={LABEL_STYLE}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="jane@example.com"
              required
              style={INPUT_STYLE}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {/* Service */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={LABEL_STYLE}>Service Interested In</label>
            <select
              name="service"
              style={{ ...INPUT_STYLE, appearance: "none", WebkitAppearance: "none" }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <option value="">— Select a service —</option>
              {SERVICE_OPTIONS.map((o) => (
                <option key={o} style={{ background: "var(--black)" }}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={LABEL_STYLE}>Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project, vehicle, event date, or any questions..."
              rows={isMobile ? 5 : 6}
              style={{ ...INPUT_STYLE, resize: "vertical" }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {/* Hidden year */}
          <input type="hidden" name="year" value={new Date().getFullYear()} />

          {/* Feedback messages */}
          {error && (
            <p style={{ fontSize: 12, color: "#e05c5c", letterSpacing: 1 }}>
              Something went wrong. Please try again or email directly.
            </p>
          )}

          <Btn
            style={{
              alignSelf: isMobile ? "stretch" : "flex-start",
              textAlign: "center",
              opacity: submitted ? 0.8 : 1,
            }}
          >
            {submitted ? "Message Sent ✦" : "Send Message"}
          </Btn>
        </form>

        {/* ── Contact info ── */}
        <div style={{ paddingTop: isMobile ? 0 : 10 }}>
          {CONTACT_INFO.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 18,
                padding: isMobile ? "18px 0" : "24px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }}>
                {item.icon}
              </span>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "var(--gray)",
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </div>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
