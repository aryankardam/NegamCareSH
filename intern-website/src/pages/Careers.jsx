import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Code-split components
const CareersHero = lazy(() => import("../components/CareerSection/CareersHero"));
const CareersHeader = lazy(() => import("../components/CareerSection/CareersHeader"));
const CareerForm = lazy(() => import("../components/CareerSection/CareerForm"));

const Careers = () => {
  return (
    <main className="bg-linear-to-br from-brand-white via-[#f8fbfa] to-brand-primary/3 min-h-screen overflow-x-hidden antialiased">
      {/* Careers progress bar */}
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
              Careers @ Negam Care
            </div>
            <div className="text-sm text-brand-dark/70">
              Preparing opportunities for agricultural innovators...
            </div>
          </motion.div>
        </motion.div>
      }>
        {/* Hero */}
        <motion.section
          id="careers-hero"
          className="scroll-mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CareersHero />
        </motion.section>

        {/* Header */}
        <motion.section
          id="careers-header"
          className="scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
        >
          <CareersHeader />
        </motion.section>

        {/* Form Section */}
        <motion.section
          id="careers-apply"
          className="scroll-mt-20 py-20 md:py-28 lg:py-32 relative"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, var(--color-brand-primary) 0%, transparent 60%),
              radial-gradient(circle at 80% 80%, var(--color-brand-accent) 0%, transparent 60%)
            `,
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 relative z-10">
            <motion.div
              className="bg-brand-white/85 backdrop-blur-xl shadow-2xl 
                         rounded-3xl lg:rounded-[3rem] p-8 md:p-12 lg:p-16 xl:p-20 
                         border border-brand-primary/8 hover:border-brand-primary/20 
                         hover:shadow-brand-primary/15 hover:shadow-3xl 
                         transition-all duration-700 mx-auto max-w-4xl"
              whileHover={{ 
                scale: 1.01,
                y: -4,
                boxShadow: "0 35px 80px -20px rgba(0,136,101,0.2)"
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(135deg, var(--color-brand-white) 0%, rgba(var(--color-brand-primary-rgb), 0.02) 100%)",
                    "linear-gradient(135deg, rgba(var(--color-brand-accent-rgb), 0.02) 0%, var(--color-brand-white) 100%)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 -z-10 opacity-60 blur-sm rounded-3xl lg:rounded-[3rem]"
              />
              
              <CareerForm />
            </motion.div>
          </div>
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
        onClick={() => document.getElementById("careers-hero")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Back to top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
      >
        ↑
      </motion.button>
    </main>
  );
};

export default Careers;
