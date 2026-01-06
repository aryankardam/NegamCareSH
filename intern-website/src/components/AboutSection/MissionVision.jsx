// src/components/AboutSection/MissionVision.jsx
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <motion.section
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 25%, rgba(8, 79, 37, 0.03) 0%, transparent 55%),
          radial-gradient(circle at 85% 75%, rgba(131, 199, 20, 0.02) 0%, transparent 55%),
          linear-gradient(135deg, var(--color-brand-white) 0%, rgba(0,136,101,0.01) 100%)
        `,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Subtle ambient particles - screenshot matched opacity */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-linear-to-br 
                   from-brand-primary/5 to-brand-accent/3 
                   rounded-full blur-xl opacity-30"
        animate={{ y: [0, -12, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-20 h-20 bg-linear-to-r 
                   from-brand-dark/4 to-brand-primary/3 
                   rounded-full blur-lg opacity-25"
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20 lg:mb-24 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl 
                       bg-linear-to-r from-brand-dark via-brand-primary 
                       to-brand-accent bg-clip-text text-transparent 
                       mb-6 lg:mb-8 drop-shadow-lg leading-tight"
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Mission & Vision
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl 
                       text-brand-dark/70 leading-relaxed font-medium 
                       max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Guiding principles that define Negam Care's purpose and long-term
            direction within the agricultural ecosystem.
          </motion.p>
        </motion.div>

        {/* Dual Cards Layout - screenshot matched spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16">
          {/* Mission Card */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl p-8 md:p-10 lg:p-12 
                       bg-brand-white/80 backdrop-blur-xl 
                       border border-brand-primary/5 shadow-xl 
                       hover:shadow-2xl hover:shadow-(--color-brand-primary)/15 
                       hover:-translate-y-2 hover:border-brand-primary/20 
                       transition-all duration-500 lg:max-h-105"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 25px 50px -12px rgba(0,136,101,0.18)"
            }}
            viewport={{ once: true }}
          >
            {/* Decorative top bar - subtle */}
            <div className="absolute top-0 left-0 right-0 h-1.5 
                             bg-linear-to-r from-brand-primary/80 
                             to-brand-accent/80 shadow-md" />

            {/* Icon */}
            <motion.div
              className="absolute -top-5 left-6 w-10 h-10 md:w-12 md:h-12 flex items-center 
                         justify-center rounded-2xl bg-brand-primary 
                         shadow-xl border-4 border-brand-white text-brand-white 
                         font-bold text-base md:text-lg"
              animate={{
                scale: [1, 1.12, 1],
                rotate: [-1.5, 1.5, -1.5],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              M
            </motion.div>

            <motion.h3
              className="font-heading text-xl md:text-2xl lg:text-3xl 
                         text-brand-dark mb-5 md:mb-6 leading-tight pt-3"
              whileHover={{ color: "var(--color-brand-primary)" }}
            >
              Our Mission
            </motion.h3>

            <motion.p
              className="text-base md:text-lg 
                         text-brand-dark/85 leading-relaxed line-clamp-4 lg:line-clamp-none"
              whileHover={{ color: "var(--color-brand-dark)" }}
            >
              To enable sustainable agricultural growth through innovation, research 
              collaboration, and digital transformation—integrating cultivation, 
              processing, and transparent trade systems to support farming communities 
              and market ecosystems.
            </motion.p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl p-8 md:p-10 lg:p-12 
                       bg-brand-white/80 backdrop-blur-xl 
                       border border-brand-accent/5 shadow-xl 
                       hover:shadow-2xl hover:shadow-(--color-brand-accent)/15 
                       hover:-translate-y-2 hover:border-brand-accent/20 
                       transition-all duration-500 lg:max-h-105"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 25px 50px -12px rgba(131,199,20,0.18)"
            }}
            viewport={{ once: true }}
          >
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 
                             bg-linear-to-r from-brand-accent/80 
                             to-brand-primary/80 shadow-md" />

            {/* Icon */}
            <motion.div
              className="absolute -top-5 right-6 w-10 h-10 md:w-12 md:h-12 flex items-center 
                         justify-center rounded-2xl bg-brand-accent 
                         shadow-xl border-4 border-brand-white text-brand-white 
                         font-bold text-base md:text-lg"
              animate={{
                scale: [1, 1.12, 1],
                rotate: [1.5, -1.5, 1.5],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            >
              V
            </motion.div>

            <motion.h3
              className="font-heading text-xl md:text-2xl lg:text-3xl 
                         text-brand-dark mb-5 md:mb-6 leading-tight pt-3"
              whileHover={{ color: "var(--color-brand-accent)" }}
            >
              Our Vision
            </motion.h3>

            <motion.p
              className="text-base md:text-lg 
                         text-brand-dark/85 leading-relaxed line-clamp-4 lg:line-clamp-none"
              whileHover={{ color: "var(--color-brand-dark)" }}
            >
              To contribute to a resilient and inclusive agricultural ecosystem by 
              strengthening research linkages, improving value realisation, and 
              enabling efficient market access across India and beyond.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionVision;
