// src/components/AboutSection/ValueChainApproach.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ← ADD THIS IMPORT
import valueChainImage from "../../assets/images/vegetable-fresh-greenhouse-with-infographics-smart-farming-precision-agriculture-40-with-visual-icon-digital-technology-agriculture-smart-farming-concept.jpg";

const ValueChainApproach = () => {
  return (
    <motion.section
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(8, 79, 37, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(131, 199, 20, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, rgba(0, 136, 101, 0.02) 0%, transparent 70%)
        `,
      }}
      id="value-chain"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 -right-20 w-40 h-40 bg-linear-to-br from-brand-primary/10 to-brand-accent/5 rounded-full blur-xl opacity-60"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-32 h-32 bg-linear-to-r from-brand-dark/8 to-brand-primary/5 rounded-full blur-lg opacity-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 lg:mb-20 max-w-4xl text-center mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary/10 backdrop-blur-sm rounded-full border border-brand-primary/20 text-sm font-semibold text-brand-primary mb-8 max-w-max mx-auto">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
            Our Integrated Approach
          </motion.div>

          <motion.h2
            className="font-heading text-4xl md:text-4xl lg:text-5xl xl:text-6xl 
                       bg-linear-to-r from-brand-dark via-brand-primary to-brand-accent 
                       bg-clip-text text-transparent mb-8 drop-shadow-2xl leading-tight"
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Our Approach to Agri-Value Chains
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl 
                       text-brand-dark/90 leading-relaxed font-medium max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Negam Care follows an integrated value-chain approach that aligns
            upstream cultivation and research initiatives with downstream
            processing and market access. This model ensures continuity from
            farm-level practices to end-market engagement, supported by
            technology, institutional partnerships, and operational
            infrastructure.
          </motion.p>
        </motion.div>

        {/* Value Chain Visual */}
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-2xl 
               group bg-linear-to-br from-white/60 to-white/30 backdrop-blur-xl 
               border border-white/50 hover:border-brand-primary/40 
               lg:hover:shadow-[0_35px_60px_rgba(0,0,0,0.15)]"
            whileHover={{
              scale: 1.02,
              y: -8,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img
              src={valueChainImage}
              alt="Integrated agri-value chain: research, cultivation, processing, digital trade, and logistics"
              className="w-full h-75 sm:h-87.5 md:h-100 lg:h-112.5 xl:h-125 
                  object-cover group-hover:scale-[1.05] transition-transform duration-700"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/0 to-transparent" />

            {/* Responsive caption */}
            <motion.div
              className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-12 
                 bg-white/95 backdrop-blur-xl px-5 py-3 sm:px-6 sm:py-4 
                 rounded-2xl shadow-2xl border border-white/60 max-w-sm"
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <p
                className="text-xs sm:text-sm lg:text-base font-semibold tracking-wide
                     bg-linear-to-r from-brand-primary via-brand-accent to-brand-dark 
                     bg-clip-text text-transparent leading-tight"
              >
                Research → Processing → Digital Trade → Logistics
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link // ← NOW WORKS!
            to="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r 
                       from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary
                       text-white font-bold text-lg uppercase tracking-wider rounded-2xl shadow-xl 
                       hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
          >
            Explore Our Services
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
      </div>
    </motion.section>
  );
};

export default ValueChainApproach;
