// src/pages/Contact.jsx
import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load components
const PartnerHero = lazy(() => import("../components/PartnerSection/PartnerHero"));
const PartnerTypes = lazy(() => import("../components/PartnerSection/PartnerTypes"));
const PartnerValue = lazy(() => import("../components/PartnerSection/PartnerValue"));
const PartnerContact = lazy(() => import("../components/PartnerSection/PartnerContact"));

const Contact = () => {
  return (
    <main className="bg-brand-white text-brand-dark overflow-x-hidden antialiased">
      {/* Contact progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 shadow-sm bg-brand-primary/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-linear-to-r from-brand-primary to-brand-accent shadow-lg origin-left"
          style={{ scaleX: 0 }}
        />
      </motion.div>

      <Suspense fallback={
        <motion.div 
          className="min-h-screen flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="text-center max-w-md space-y-4"
            initial={{ y: 20, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 border-4 border-brand-primary/20 
                         border-t-brand-primary rounded-full shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
            <div className="text-2xl font-bold text-brand-primary mb-2">
              Partner with Negam Care
            </div>
            <div className="text-sm text-brand-dark/70">
              Building agri-partnerships...
            </div>
          </motion.div>
        </motion.div>
      }>
        {/* Partner Hero */}
        <motion.section
          id="partner-hero"
          className="scroll-mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PartnerHero />
        </motion.section>

        {/* Partner Types */}
        <motion.section
          id="partner-types"
          className="scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
        >
          <PartnerTypes />
        </motion.section>

        {/* Partner Value */}
        <motion.section
          id="partner-value"
          className="scroll-mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <PartnerValue />
        </motion.section>

        {/* Partner Contact */}
        <motion.section
          id="partner-contact"
          className="scroll-mt-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <PartnerContact />
        </motion.section>
      </Suspense>

      {/* Back to top */}
      <motion.button
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-2xl md:hidden
                   bg-brand-primary hover:bg-brand-accent
                   border-2 border-brand-white/30 text-brand-white 
                   backdrop-blur-xl active:scale-92 transition-all duration-300 
                   flex items-center justify-center opacity-0 invisible"
        animate={{ 
          opacity: window.scrollY > 400 ? 1 : 0,
          y: window.scrollY > 400 ? 0 : 20 
        }}
        transition={{ duration: 0.25 }}
        onClick={() => document.getElementById("partner-hero")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Back to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
      >
        ↑
      </motion.button>
    </main>
  );
};

export default Contact;
