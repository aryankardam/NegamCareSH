import React, { lazy, Suspense } from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { motion } from "framer-motion";
import ContactStrip from '../components/ContactStrip'

// Lazy load heavy sections
const ServicesHero = lazy(() => import('../components/ServicesSection/ServicesHero'));
const ServicesOverview = lazy(() => import('../components/ServicesSection/ServicesOverview'));
const ProcessingSection = lazy(() => import('../components/ServicesSection/ProcessingSection'));
const LogisticsSection = lazy(() => import('../components/ServicesSection/LogisticsSection'));
const InstitutionalSection = lazy(() => import('../components/ServicesSection/InstitutionalSection'));
const ApplicationsStrip = lazy(() => import('../components/ServicesSection/ApplicationsStrip'));
const AgroforestrySection = lazy(() => import('../components/ServicesSection/AgroforestrySection'));

const ServicesPage = () => {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      // Immediate, no delay, no animation lag
      el.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  }
}, [location.hash]);


  return (
    <main className="bg-brand-white text-brand-dark overflow-x-hidden">
      {/* Services progress bar */}
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
              Negam Care Services
            </div>
            <div className="text-sm text-brand-dark/70">
              Loading comprehensive agri-solutions...
            </div>
          </motion.div>
        </motion.div>
      }>
        {/* Hero */}
        <motion.section
          id="services-hero"
          className="scroll-mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ServicesHero />
        </motion.section>

        {/* Overview */}
        <motion.section
          id="services-overview"
          className="scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
        >
          <ServicesOverview />
        </motion.section>

        {/* Processing */}
        <motion.section
          id="processing"
          className="scroll-mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <ProcessingSection />
        </motion.section>

        {/* Trading */}
        {/* <motion.section
          id="trading"
          className="scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
        >
          <TradingSection />
        </motion.section> */}

        {/* Logistics */}
        <motion.section
          id="logistics"
          className="scroll-mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <LogisticsSection />
        </motion.section>

        {/* Institutional */}
        <motion.section
          id="institutional"
          className="scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
        >
          <InstitutionalSection />
        </motion.section>

        {/* Agroforestry */}
        <motion.section
          id="agroforestry"
          className="scroll-mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <AgroforestrySection />
        </motion.section>

        {/* Applications */}
        <motion.section
          id="applications"
          className="scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
        >
          <ApplicationsStrip />
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="scroll-mt-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ContactStrip />
        </motion.section>
      </Suspense>
    </main>
  );
};

export default ServicesPage;
