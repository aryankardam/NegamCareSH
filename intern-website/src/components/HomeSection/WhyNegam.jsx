// src/components/HomeSection/WhyNegam.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import valueImage from "../../assets/images/why-negam-aerial.png";

const valuePoints = [
  "Research-led decision-making across agricultural value chains",
  "Technology-enabled price discovery and transparent market access",
  "Scalable sourcing and multimodal logistics networks across India",
  "Farmer-centric, institutionally aligned operating models",
];

const WhyNegam = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="bg-brand-white py-12 md:py-16"
      aria-labelledby="why-negam-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
          {/* CONTENT — LEFT */}
          <motion.div
            className="space-y-4 md:space-y-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Eyebrow */}
            <motion.button
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-linear-to-r 
                         from-brand-primary to-brand-accent
                         text-brand-white text-xs md:text-sm font-semibold uppercase 
                         tracking-[0.22em] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 
                         transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/60
                         focus:ring-offset-1 focus:ring-offset-brand-primary mb-4 border border-white/10 group"
              aria-label="Learn more about why Negam Care"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-110 transition-transform"
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Why Negam Care
            </motion.button>

            {/* Heading */}
            <h2
              id="why-negam-title"
              className="font-heading text-2xl md:text-3xl lg:text-4xl 
                         text-brand-dark leading-snug"
            >
              A Unified Approach to Agri-Value Chains
            </h2>

            {/* Description */}
            <p
              className="max-w-xl text-sm md:text-base 
                         text-brand-dark/80 
                         leading-relaxed"
            >
              Negam Care integrates research-led insights, processing
              infrastructure, and digital trade systems within a single
              operating framework—ensuring continuity from cultivation to
              transparent, scalable market access.
            </p>

            {/* Value Points – more compact */}
            <ul className="mt-6 space-y-3" role="list">
              {valuePoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="group flex items-start gap-3 rounded-lg p-4 cursor-pointer
                             transition-all duration-250 border border-transparent
                             hover:border-brand-primary/25
                             hover:bg-brand-accent/5 
                             focus-within:outline-none focus-within:ring-2 
                             focus-within:ring-brand-primary/30 
                             focus-within:ring-offset-1"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ paddingLeft: 18 }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Feature: ${point}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      // optional: expand / show more
                    }
                  }}
                >
                  {/* Animated Indicator */}
                  <motion.span
                    className="mt-2 h-2.5 w-2.5 rounded-full 
                               bg-brand-primary shrink-0"
                    animate={
                      hoveredIndex === index
                        ? {
                            scale: [1, 1.35, 1],
                            backgroundColor: "var(--color-brand-accent)",
                          }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.35 }}
                  />

                  {/* Text */}
                  <motion.p
                    className="text-sm md:text-base 
                               text-brand-dark/80 
                               leading-relaxed group-hover:text-brand-dark"
                    animate={
                      hoveredIndex === index ? { color: "rgb(0 0 0 / 1)" } : {}
                    }
                  >
                    {point}
                  </motion.p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* IMAGE — RIGHT */}
          <motion.div
            className="relative group overflow-hidden rounded-2xl 
                       bg-brand-accent/10 
                       shadow-lg transition-all duration-400
                       hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={valueImage}
              alt="Integrated agricultural ecosystem showing aerial view of research plots, processing facilities, and market connections"
              className="h-64 md:h-95 w-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.45 }}
            />

            {/* Depth overlay */}
            <div
              className="absolute inset-0 bg-linear-to-t 
                         from-black/25 via-transparent to-transparent"
            />

            {/* Context Label */}
            <motion.div
              className="absolute bottom-4 left-4 rounded-lg 
                         bg-white/95 px-4 py-2.5 shadow-md backdrop-blur
                         transition-all duration-400"
              whileHover={{ y: -3 }}
            >
              <p
                className="text-xs font-semibold 
                           text-brand-dark"
              >
                Integrated Value-Chain Model
              </p>
              <p
                className="text-[11px] 
                           text-brand-dark/70"
              >
                From research plots to end markets
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyNegam;
