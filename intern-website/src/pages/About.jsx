import { useEffect, useState } from "react";
import AboutOverview from "../components/AboutSection/AboutOverview";
import MissionVision from "../components/AboutSection/MissionVision";
import ValueChainApproach from "../components/AboutSection/ValueChainApproach";
import Contactstrip from "../components/Contactstrip";

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
        rootMargin: "-30% 0px -50% 0px", // controls trigger point
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="bg-[color:var(--color-brand-white)]">
      {/* Header */}
      <section className="border-b border-[color:var(--color-brand-dark)]/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="font-heading text-3xl md:text-4xl text-[color:var(--color-brand-dark)]">
            About us
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">

          {/* Sidebar */}
          <aside className="hidden lg:block sticky top-28 self-start">
            <nav className="space-y-6">
              {SECTIONS.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="group flex items-start gap-4 w-full text-left"
                  >
                    {/* Active Indicator Line */}
                    <span
                      className={`mt-1 h-5 w-1 rounded-full transition-all
                        ${isActive
                          ? "bg-[color:var(--color-brand-primary)]"
                          : "bg-transparent group-hover:bg-[color:var(--color-brand-primary)]/30"
                        }`}
                    />

                    {/* Label */}
                    <span
                      className={`text-sm font-medium transition-colors
                        ${isActive
                          ? "text-[color:var(--color-brand-primary)]"
                          : "text-[color:var(--color-brand-dark)]/70 group-hover:text-[color:var(--color-brand-primary)]"
                        }`}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="space-y-24">
            <section id="overview">
              <AboutOverview />
            </section>

            <section id="mission">
              <MissionVision />
            </section>

            <section id="value-chain">
              <ValueChainApproach />
            </section>
          </div>

        </div>
      </section>
      <Contactstrip />
    </main>
  );
};

export default About;
