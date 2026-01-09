// src/components/AboutSection/ValueChainApproach.jsx
import { motion } from "framer-motion";
import researchImage from "../../assets/images/value-chain-agri.png";
import processingImage from "../../assets/images/value-chain-agri.png";
import digitalTradeImage from "../../assets/images/about-overview.jpg";
import logisticsImage from "../../assets/images/hero-collaboration.jpg";

const STEPS = [
  {
    title: "Agricultural Research & Cultivation",
    description:
      "University-led and applied agricultural research focused on seed development, cultivation practices, and phytochemical applications, translated into structured on-ground cultivation programs.",
    image: researchImage,
    imageTitle: "Research",
  },
  {
    title: "Agri Processing & Value Addition",
    description:
      "Value-added agri-processing infrastructure supporting extraction, drying, packaging, and export-ready product development, aimed at improving realisation and reducing post-harvest losses.",
    image: processingImage,
    imageTitle: "Processing",
  },
  {
    title: "Digital Trade & Market Enablement",
    description:
      "Digital agri-commodity trading platforms enabling transparent price discovery, direct producer-buyer transactions, and integration with APMC systems, logistics, and payment infrastructure.",
    image: digitalTradeImage,
    imageTitle: "Digital Trade",
  },
  {
    title: "Institutional Integration & Logistics",
    description:
      "Strengthening APMC markets, farmer producer organisations (FPOs), and institutional trade through sourcing, aggregation, and multimodal logistics support across large-scale agricultural footprints.",
    image: logisticsImage,
    imageTitle: "Logistics",
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
        className="absolute top-1/4 -right-20 w-40 h-40 bg-gradient-to-br from-brand-primary/10 to-brand-accent/5 rounded-full blur-xl opacity-60"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-32 h-32 bg-gradient-to-r from-brand-dark/8 to-brand-primary/5 rounded-full blur-lg opacity-50"
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
                       bg-gradient-to-r from-brand-dark via-brand-primary to-brand-accent 
                       bg-clip-text text-transparent mb-6 drop-shadow-lg"
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
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
            Negam Care operates across the agricultural value chain by
            integrating research, cultivation, processing, and digital trade
            within a single, structured operating framework.
          </motion.p>
        </motion.div>

        {/* Steps Grid - [CONTENT -- IMAGE] pairs */}
        <div className="space-y-6 lg:space-y-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Content (LEFT) */}
              <motion.div
                className="group relative pl-8 lg:pl-10 py-6 lg:py-8 rounded-2xl 
                           bg-brand-white/60 backdrop-blur-sm border border-brand-primary/10 
                           hover:bg-brand-white hover:shadow-lg hover:border-brand-primary/25 
                           hover:-translate-y-1 transition-all duration-400 cursor-default lg:hover:-translate-x-2"
              >
                {/* Step Number */}
                <motion.div
                  className="absolute -left-8 top-6 w-6 h-6 lg:w-8 lg:h-8 flex items-center 
                             justify-center rounded-full bg-brand-primary text-brand-dark 
                             font-bold text-xs lg:text-sm shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    backgroundColor: [
                      "color:var(--color-brand-primary)",
                      "color:var(--color-brand-accent)",
                      "color:var(--color-brand-primary)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
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
              </motion.div>

              {/* Image (RIGHT - Directly opposite) */}
              <motion.div
                className="relative overflow-hidden rounded-3xl 
                           bg-brand-white/70 backdrop-blur-xl shadow-2xl 
                           border-4 border-brand-white/40 hover:border-brand-primary/30
                           hover:shadow-brand-primary/10 hover:-translate-y-1 transition-all duration-500 cursor-pointer lg:hover:translate-x-2"
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={`${step.image}`}
                  alt={`${step.title} - Visual representation`}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent" />

                {/* Step Label */}
                {/* <motion.div
                  className="absolute bottom-4 left-14 right-14 
                             bg-brand-white/95 backdrop-blur-xl px-4 py-2 rounded-xl shadow-2xl 
                             border border-brand-white/50"
                  whileHover={{ scale: 1.02, y: -1 }}
                >
                  <motion.p
                    className="text-xs md:text-sm font-semibold 
                               bg-gradient-to-r from-brand-primary to-brand-accent 
                               bg-clip-text text-transparent font-medium"
                    whileInView={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {step.imageTitle}
                  </motion.p>
                </motion.div> */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-white/90
                           text-brand-dark px-3 py-1 rounded-xl text-xs font-bold 
                             shadow-lg border-2 border-white/50"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {step.imageTitle}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ValueChainApproach;
