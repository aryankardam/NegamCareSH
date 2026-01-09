// src/components/AboutSection/AboutOverview.jsx
import { motion } from "framer-motion";
import overviewImage from "../../assets/images/about-overview.jpg";

const AboutOverview = () => {
  return (
    <motion.div
      className="space-y-8 lg:space-y-12 relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px 0px" }}
    >
      {/* Subtle background ambiance */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-40 blur-xl rounded-3xl"
        style={{
          background: `radial-gradient(circle at 20% 30%, var(--color-brand-primary) 0%, transparent 60%), 
                       radial-gradient(circle at 80% 70%, var(--color-brand-accent) 0%, transparent 60%)`,
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Section Heading */}
      <motion.header className="max-w-2xl text-center">
        <motion.h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl 
                     bg-linear-to-r from-brand-dark via-brand-primary to-brand-accent
                     bg-clip-text text-transparent mb-6 drop-shadow-lg leading-tight"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Overview
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl 
                     text-brand-dark/75 leading-relaxed font-medium px-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          An overview of Negam Care's role, focus areas, and approach within the
          agricultural ecosystem.
        </motion.p>
      </motion.header>

      {/* Content + Image Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Content Column */}
        <motion.div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
          <motion.div className="space-y-6">
            <motion.p
              className="text-base md:text-lg lg:text-xl 
                         text-brand-dark/85 leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Negam Care is a purpose-driven agri-technology enterprise focused
              on integrating research, processing, and digital trade to improve
              agricultural outcomes.
            </motion.p>

            <motion.p
              className="text-base md:text-lg lg:text-xl 
                         text-brand-dark/80 leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              The company works across cultivation, value addition, and market
              enablement to support transparent, efficient, and scalable
              agri-value chains aligned with institutional and policy
              frameworks.
            </motion.p>
          </motion.div>

          {/* Key Metrics */}
          {/* <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="group p-6 md:p-8 rounded-2xl bg-linear-to-br from-brand-primary/5 
                         to-brand-accent/5 border border-brand-primary/20 
                         hover:shadow-xl hover:shadow-(--color-brand-primary)/20 
                         hover:-translate-y-2 hover:border-brand-primary/40 
                         transition-all duration-500 cursor-default"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold 
                           bg-linear-to-r from-brand-primary to-brand-accent
                           bg-clip-text text-transparent mb-2"
                whileHover={{ scale: 1.1 }}
              >
                4+
              </motion.div>
              <div className="text-sm md:text-base text-brand-dark/80 font-medium">
                Core Services
              </div>
            </motion.div>

            <motion.div
              className="group p-6 md:p-8 rounded-2xl bg-linear-to-br from-brand-accent/5 
                         to-brand-primary/5 border border-brand-accent/20 
                         hover:shadow-xl hover:shadow-(--color-brand-accent)/20 
                         hover:-translate-y-2 hover:border-brand-accent/40 
                         transition-all duration-500 cursor-default"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold 
                           bg-linear-to-r from-brand-accent to-brand-primary
                           bg-clip-text text-transparent mb-2"
                whileHover={{ scale: 1.1 }}
              >
                India-wide
              </motion.div>
              <div className="text-sm md:text-base text-brand-dark/80 font-medium">
                Network Coverage
              </div>
            </motion.div>
          </motion.div> */}
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="relative order-1 lg:order-2 group"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            className="relative overflow-hidden rounded-3xl shadow-2xl 
                          ring-4 ring-brand-white/50 group-hover:ring-brand-primary/20 
                          bg-linear-to-br from-brand-white/70 backdrop-blur-xl"
          >
            <motion.img
              src={overviewImage}
              alt="Negam Care comprehensive agricultural ecosystem: research facilities, processing infrastructure, digital trading platforms, and nationwide logistics operations"
              className="w-full h-80 md:h-95 lg:h-110 object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-brand-dark/15 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -top-4 -right-4 bg-linear-to-r from-brand-primary 
                       to-brand-accent backdrop-blur-xl text-brand-white 
                       px-6 py-3 rounded-bl-2xl lg:rounded-bl-3xl shadow-2xl text-sm 
                       lg:text-base font-semibold border border-brand-primary/30"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Our Ecosystem
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutOverview;
