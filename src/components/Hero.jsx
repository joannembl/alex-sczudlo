import { Btn } from "./shared/UI.jsx";
import CapturingMachines from '../photos/DSC01250.jpeg';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        minHeight: 650,
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 70%, #0a0a0a 100%), linear-gradient(105deg,#1a1208 0%,#0a0a0a 40%,#0d1520 100%)",
        }}
      >
        <img
            src={CapturingMachines}
            alt="Capturing Machines"
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
        />
        {/* <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(-55deg,transparent,transparent 120px,rgba(201,168,76,0.03) 120px,rgba(201,168,76,0.03) 121px)",
          }}
        /> */}
      </div>

      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          right: -100,
          bottom: 60,
          width: 700,
          height: 350,
          background:
            "radial-gradient(ellipse at 60% 70%,rgba(201,168,76,0.12) 0%,transparent 70%)",
          borderRadius: "50%",
          zIndex: 1,
          animation: "pulseGlow 4s ease-in-out infinite alternate",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, padding: "0 60px 80px", maxWidth: 900 }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 18,
            animation: "fadeUp 0.8s ease both",
          }}
        >
          Automotive · Portraits · Events · Products
        </p>
        <h1
          style={{
            fontFamily: "var(--display)",
            fontSize: "clamp(64px,10vw,130px)",
            lineHeight: 0.92,
            letterSpacing: 2,
            color: "var(--white)",
            animation: "fadeUp 0.8s 0.15s ease both",
          }}
        >
          CAPTURING
          <br />
          <span style={{ color: "var(--gold)" }}>MACHINES</span>
          <br />
          IN MOTION
        </h1>
        <p
          style={{
            marginTop: 24,
            fontFamily: "var(--serif)",
            fontSize: 20,
            fontWeight: 300,
            color: "var(--lgray)",
            maxWidth: 480,
            animation: "fadeUp 0.8s 0.3s ease both",
          }}
        />
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            animation: "fadeUp 0.8s 0.45s ease both",
          }}
        >
          <Btn
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            View Portfolio
          </Btn>
          {/* <Btn href="#contact" outline>
            Book a Session
          </Btn> */}
          <Btn href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            outline
            style={{
            borderColor: "var(--gold)",
            color: "var(--white)",
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(4px)",
          }}>
            Book a Session
          </Btn>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          right: 60,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          fontSize: 9,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "var(--gray)",
        }}
      >
        <div
          style={{
            width: 1,
            height: 50,
            background: "linear-gradient(to bottom,var(--gold),transparent)",
            animation: "scrollDrop 1.5s ease-in-out infinite",
          }}
        />
        SCROLL
      </div>
    </section>
  );
}
