// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed1.jpg";

const Hero = () => {
  return (
    <motion.section
      className="relative flex items-center min-h-[90vh] md:min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay layers */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-brand-dark/80 via-brand-primary/60 to-brand-dark/75 bg-blend-multiply"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"
        initial={{ scaleX: 1.05 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      {/* Particles */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-brand-white/10 rounded-full blur-xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-2/3 right-20 w-24 h-24 bg-brand-accent/20 rounded-full blur-lg"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-brand-white/5 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 mx-auto flex w-full max-w-7xl px-6 py-20 md:py-28 lg:py-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="w-full max-w-4xl text-left">
          {/* Hiring Badge */}
          <motion.div
            className="inline-flex items-center justify-center gap-3 mb-8 md:mb-12 px-8 py-4 bg-brand-white/20 backdrop-blur-xl rounded-2xl border border-brand-white/40 text-brand-white text-sm md:text-base font-bold uppercase tracking-[0.3em]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="w-3 h-3 bg-brand-accent rounded-full"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Empowering Agriculture
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-white mb-8 md:mb-12 leading-tight tracking-tight drop-shadow-2xl md:drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] lg:whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="block lg:inline">Building Future - Ready</span>
            <br className="hidden lg:block" />
            <motion.span
              className="block lg:inline bg-linear-to-r from-brand-accent via-brand-white/90 to-brand-accent bg-clip-text text-transparent drop-shadow-3xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Agri Value Chains
            </motion.span>
          </motion.h1>

          {/* Subtitle - FIXED ALIGNMENT */}
          <motion.div
            className="max-w-3xl mb-12 md:mb-16 text-xl md:text-2xl lg:text-3xl text-brand-white/95 font-light leading-[1.3] tracking-wide drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Integrating{" "}
            <motion.strong
              className="text-brand-accent font-semibold"
              whileHover={{ scale: 1.05 }}
            >
            research, processing, and technology enabled trade
            </motion.strong>{" "}
            to create transparent, scalable and sustainable agricultural
            ecosystems.
          </motion.div>

          {/* Dual CTA Buttons — FIXED & FUNCTIONAL */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* Primary CTA */}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/about"
                className="
        group inline-flex items-center justify-center gap-3
        px-8 py-4 min-w-[220px]
        rounded-xl
        bg-brand-white
        text-brand-dark
        text-base md:text-lg
        font-semibold uppercase tracking-wide
        shadow-lg hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-brand-white/40
        transition-all duration-300
      "
                aria-label="Learn more about Negam Care"
              >
                <span>Learn More</span>
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="
                  group inline-flex items-center justify-center gap-3
                  px-8 py-4 min-w-55
                  rounded-xl
                  border-2 border-brand-white/70
                  text-brand-white
                  bg-transparent
                  text-base md:text-lg
                  font-semibold uppercase tracking-wide
                  hover:bg-brand-white/10
                  shadow-md hover:shadow-lg
                  focus:outline-none focus:ring-4 focus:ring-brand-white/30
                  transition-all duration-300
                "
                aria-label="Contact Negam Care team"
              >
                <span>Get in Touch</span>
                <svg
                  className="h-5 w-5 opacity-80 transition-transform duration-300 group-hover:translate-x-1 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="flex flex-col items-center gap-2">
              <motion.div
                className="w-6 h-12 border-2 border-brand-white/60 rounded-full flex justify-center p-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.div
                  className="w-1.5 h-3 bg-brand-white rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <motion.span
                className="text-xs uppercase tracking-wider text-brand-white/80 font-medium"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Scroll
              </motion.span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
