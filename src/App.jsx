import { useState, useEffect } from "react";
import GLOBAL_CSS from "./styles/global.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Publications from "./components/Publications.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Instagram from "./components/Instagram.jsx";
import Pricing from "./components/Pricing.jsx";
import Discounts from "./components/Discounts.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "var(--black)" }}>
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />
      <Publications />
      <About />
      <Portfolio />
      {/* <Instagram /> */}
      <Pricing />
      <Discounts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
