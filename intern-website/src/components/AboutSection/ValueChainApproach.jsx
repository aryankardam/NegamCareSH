// src/components/AboutSection/ValueChainApproach.jsx
import { motion } from "framer-motion";
import valueChainImage from "../../assets/images/value-chain-agri.png";

const STEPS = [
  {
    title: "Agricultural Research & Cultivation",
    description:
      "University-led and applied agricultural research focused on seed development, cultivation practices, and phytochemical applications, translated into structured on-ground cultivation programs.",
  },
  {
    title: "Agri Processing & Value Addition",
    description:
      "Value-added agri-processing infrastructure supporting extraction, drying, packaging, and export-ready product development, aimed at improving realisation and reducing post-harvest losses.",
  },
  {
    title: "Digital Trade & Market Enablement",
    description:
      "Digital agri-commodity trading platforms enabling transparent price discovery, direct producer-buyer transactions, and integration with APMC systems, logistics, and payment infrastructure.",
  },
  {
    title: "Institutional Integration & Logistics",
    description:
      "Strengthening APMC markets, farmer producer organisations (FPOs), and institutional trade through sourcing, aggregation, and multimodal logistics support across large-scale agricultural footprints.",
  },
];

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

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16 lg:mb-20 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl 
                       bg-linear-to-r from-brand-dark via-brand-primary to-brand-accent 
                       bg-clip-text text-transparent mb-6 drop-shadow-lg"
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Integrated Agri Value-Chain Approach
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl 
                       text-brand-dark/80 leading-relaxed font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Negam Care operates across the agricultural value chain by integrating
            research, cultivation, processing, and digital trade within a single,
            structured operating framework. This approach enables transparency,
            efficiency, and long-term value creation for farmers, markets, and
            institutional stakeholders.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
          {/* Value Chain Steps */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                className="group relative pl-8 lg:pl-10 py-6 rounded-2xl 
                           bg-brand-white/60 backdrop-blur-sm border border-brand-primary/10 
                           hover:bg-brand-white hover:shadow-lg hover:border-brand-primary/25 
                           hover:-translate-y-1 transition-all duration-400 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -10px rgba(0,136,101,0.15)"
                }}
              >
                {/* Step Number */}
                <motion.div
                  className="absolute -left-8 top-6 w-6 h-6 lg:w-8 lg:h-8 flex items-center 
                             justify-center rounded-full bg-brand-primary text-brand-white 
                             font-bold text-xs lg:text-sm shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    backgroundColor: [
                      "color:var(--color-brand-primary)",
                      "color:var(--color-brand-accent)",
                      "color:var(--color-brand-primary)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  {index + 1}
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="font-heading text-xl md:text-2xl lg:text-3xl 
                             text-brand-dark mb-3 leading-tight group-hover:text-brand-primary"
                  whileHover={{ color: "color:var(--color-brand-primary)" }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-base md:text-lg lg:text-xl 
                             text-brand-dark/80 leading-relaxed"
                  whileHover={{ color: "color:var(--color-brand-dark)" }}
                >
                  {step.description}
                </motion.p>

                {/* Hover accent line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b 
                             from-brand-accent/0 via-brand-accent/50 to-brand-accent/0 opacity-0"
                  animate={{
                    opacity: 1,
                  }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Supporting Image */}
          <motion.div
            className="relative overflow-hidden rounded-3xl lg:rounded-[2.5rem]
                       bg-brand-white/70 backdrop-blur-xl shadow-2xl 
                       border-4 border-brand-white/40 hover:border-brand-primary/30
                       hover:shadow-brand-primary/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, borderColor: "rgba(0,136,101,0.3)" }}
            viewport={{ once: true }}
          >
            <motion.img
              src={valueChainImage}
              alt="Complete Negam Care agricultural value chain: research → cultivation → processing → digital trade → logistics"
              className="w-full h-100 lg:h-125 object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />

            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-brand-dark/20 via-transparent to-transparent" />

            {/* Context Label */}
            <motion.div
              className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-auto 
                         bg-brand-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl 
                         border border-brand-white/50 max-w-sm"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <motion.p
                className="text-sm lg:text-base font-semibold 
                           bg-linear-to-r from-brand-primary to-brand-accent 
                           bg-clip-text text-transparent"
                whileInView={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Research → Processing → Digital Trade → Logistics
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ValueChainApproach;
