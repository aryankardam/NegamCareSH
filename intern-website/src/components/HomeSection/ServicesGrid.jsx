// src/components/ServicesGrid.jsx
import {
  FaSeedling,
  FaIndustry,
  FaChartLine,
  FaTruckMoving,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Agricultural R&D & Seed Innovation",
    description:
      "Collaborative research initiatives focused on improved seed systems, cultivation practices, and applied agricultural sciences, undertaken in partnership with academic and institutional stakeholders.",
    icon: FaSeedling,
  },
  {
    title: "Agri-Processing & Value Addition",
    description:
      "Processing infrastructure and operational support for drying, extraction, packaging, and product standardisation, aimed at reducing wastage and improving realisation from farm output.",
    icon: FaIndustry,
  },
  {
    title: "Digital Agri-Commodity Trading",
    description:
      "A digital trading framework that enables transparent price discovery, structured transactions, and market access through technology-enabled platforms.",
    icon: FaChartLine,
  },
  {
    title: "Agri Sourcing, Aggregation & Logistics",
    description:
      "Nationwide sourcing, aggregation, and multimodal logistics capabilities designed to support high-volume, structured agricultural trade.",
    icon: FaTruckMoving,
  },
];

const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <section 
      className="py-16 md:py-20 bg-brand-white" 
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 
            id="services-title"
            className="font-heading text-3xl md:text-4xl text-brand-dark mb-4"
          >
            Our Services
          </h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Integrated capabilities spanning research, processing, digital trade, and logistics across agricultural value chains
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="group/card flex flex-col h-full p-8 rounded-2xl bg-brand-accent/5 
                           border border-brand-accent/20 hover:shadow-xl focus-within:shadow-xl
                           transition-all duration-300 hover:-translate-y-2 focus-within:-translate-y-2
                           focus-within:outline-none focus-within:ring-4 focus-within:ring-brand-primary/30 
                           focus-within:ring-offset-2 focus-within:ring-offset-brand-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  backgroundColor: "rgba(var(--color-brand-accent-rgb), 0.1)",
                  scale: 1.02 
                }}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${service.title}`}
                onClick={() => navigate("/services")}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate("/services");
                  }
                }}
              >
                {/* Icon + Title Row */}
                <div className="flex items-start gap-6 mb-6">
                  {/* Animated Icon */}
                  <motion.div 
                    className="flex h-16 w-16 shrink-0 items-center justify-center 
                               rounded-2xl bg-brand-dark shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 1,
                      }}
                    >
                      <Icon className="h-7 w-7 text-brand-white" aria-hidden="true" />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="font-heading flex-1 text-xl md:text-2xl text-brand-dark 
                               pt-1 leading-tight"
                    whileHover={{ color: "var(--color-brand-primary)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                </div>

                {/* Description */}
                <motion.p 
                  className="flex-1 text-base leading-relaxed text-brand-dark/80 mb-6"
                  whileHover={{ color: "rgb(0 0 0 / 0.9)" }}
                >
                  {service.description}
                </motion.p>

                {/* Animated CTA */}
                <motion.div 
                  className="flex items-center opacity-0 group-hover/card:opacity-100 
                             transition-all duration-300 self-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg 
                    className="h-5 w-5 text-brand-primary mr-2 shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                  <span className="text-sm font-semibold text-brand-primary uppercase tracking-wide">
                    Learn More
                  </span>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
