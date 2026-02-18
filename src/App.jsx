import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import GLOBAL_CSS from "./styles/global.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/shared/ScrollToTop.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Pricing from "./pages/Pricing.jsx";
import Discounts from "./pages/Discounts.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <HashRouter basename="/">
        <ScrollToTop />
        <div style={{ minHeight: "100vh", background: "var(--black)" }}>
          <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
    </HashRouter>
  );
}
