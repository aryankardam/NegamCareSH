import React, { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Lazy-loaded sections
const Hero = lazy(() => import("../components/HomeSection/Hero.jsx"));
const WhoWeAre = lazy(() => import("../components/HomeSection/WhoWeAre.jsx"));
const ServicesGrid = lazy(() =>
  import("../components/HomeSection/ServicesGrid.jsx")
);
const WhyNegam = lazy(() => import("../components/HomeSection/WhyNegam.jsx"));
const PartnerCTA = lazy(() =>
  import("../components/HomeSection/PartnerCTA.jsx")
);
const ContactStrip = lazy(() => import("../components/ContactStrip"));

const SECTION_IDS = [
  "hero",
  "who-we-are",
  "services",
  "why-negam",
  "partner-cta",
  "contact",
];

export const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  /* Scroll progress (throttled by browser repaint) */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / scrollHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Hash navigation */
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    if (SECTION_IDS.includes(id)) {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location.hash]);

  return (
    <main className="bg-brand-white text-brand-dark overflow-x-hidden">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-brand-primary/20">
        <motion.div
          className="h-full bg-brand-primary"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Lazy load fallback */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center px-6">
            <motion.div
              className="text-center max-w-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Spinner */}
              <motion.div
                className="w-20 h-20 mx-auto mb-6 
                     border-4 border-brand-primary/20 
                     border-t-brand-primary 
                     rounded-full shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />

              {/* Brand text */}
              <div className="text-2xl font-bold text-brand-primary mb-2">
                Welcome to Negam Care
              </div>

              <div className="text-sm text-brand-dark/70 leading-relaxed">
                Crafting your agricultural future...
              </div>
            </motion.div>
          </div>
        }
      >
        <section id="hero" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="who-we-are" className="scroll-mt-20">
          <WhoWeAre />
        </section>

        <section id="services" className="scroll-mt-20">
          <ServicesGrid />
        </section>

        <section id="why-negam" className="scroll-mt-20">
          <WhyNegam />
        </section>

        <section id="partner-cta" className="scroll-mt-20">
          <PartnerCTA />
        </section>

        <section id="contact" className="scroll-mt-20">
          <ContactStrip />
        </section>
      </Suspense>

      {/* Back to top (mobile-safe, no emoji) */}
      <motion.button
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center 
                   rounded-full bg-brand-primary 
                   text-white shadow-xl md:hidden"
        animate={{
          opacity: scrollProgress > 12 ? 1 : 0,
          y: scrollProgress > 12 ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        onClick={() =>
          document
            .getElementById("hero")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Back to top"
      >
        ↑
      </motion.button>
    </main>
  );
};
