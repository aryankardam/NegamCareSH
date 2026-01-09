import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutHero from "../components/AboutSection/AboutHero";
import AboutOverview from "../components/AboutSection/AboutOverview";
import MissionVision from "../components/AboutSection/MissionVision";
import ValueChainApproach from "../components/AboutSection/ValueChainApproach";
import ContactStrip from "../components/ContactStrip";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "mission", label: "Mission & Vision" },
  { id: "value-chain", label: "Integrated Value Chain" },
];

const About = () => {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-brand-white min-h-screen">
      {/* Hero Header */}
      <motion.section
        className="border-b border-brand-dark/5 relative overflow-hidden"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AboutHero />
      </motion.section>

      {/* Content Grid */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 lg:py-24 relative">
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-transparent via-brand-white/50 to-transparent -z-10"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,260px)_1fr] xl:grid-cols-[minmax(0,280px)_1fr] gap-8 lg:gap-12 xl:gap-16">
          {/* Animated Sidebar - TILE STYLE */}
          <motion.aside
            className="hidden lg:flex lg:flex-col sticky top-24 md:top-28 self-start pt-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <nav className="space-y-3">
              {SECTIONS.map(({ id, label }) => {
                const isActive = activeSection === id;

                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`
          group relative w-full text-left rounded-xl px-4 py-4
          transition-all duration-200
          ${
            isActive
              ? "bg-brand-dark text-white"
              : `
                bg-white
                border border-brand-dark/15
                hover:border-brand-primary/40
                hover:bg-brand-dark/5
              `
          }
        `}
                  >
                    {/* LEFT ACTIVE BAR */}
                    <span
                      className={`
            absolute left-0 top-0 h-full w-1 rounded-r
            transition-opacity duration-300
            ${
              isActive
                ? "bg-brand-primary opacity-100"
                : "opacity-0 group-hover:opacity-40 bg-brand-primary"
            }
          `}
                    />

                    {/* LABEL */}
                    <span
                      className={`
            block pl-3 text-sm lg:text-base font-medium tracking-wide
            transition-colors duration-200
            ${
              isActive
                ? "text-white font-semibold"
                : "text-brand-dark/80"
            }
          `}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </motion.aside>

          {/* Main Content */}
          <motion.div
            className="space-y-20 lg:space-y-24 xl:space-y-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.section
              id="overview"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <AboutOverview />
            </motion.section>

            <motion.section
              id="mission"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <MissionVision />
            </motion.section>

            <motion.section
              id="value-chain"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ValueChainApproach />
            </motion.section>
          </motion.div>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
};

export default About;
