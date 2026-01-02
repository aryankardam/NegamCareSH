// src/components/ServicesGrid.jsx
import {
  FaSeedling,
  FaIndustry,
  FaChartLine,
  FaTruckMoving,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
    <section className="py-16 md:py-20 bg-brand-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Integrated capabilities spanning research, processing, digital trade, and logistics across agricultural value chains
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="group cursor-pointer flex flex-col h-full p-8 rounded-2xl bg-brand-accent/5 
                          hover:bg-brand-accent/10 hover:shadow-xl 
                          transition-all duration-300 hover:-translate-y-1 border border-brand-accent/20"
                onClick={() => navigate("/services")}
              >
                {/* Icon + Title Row */}
                <div className="flex items-start gap-6 mb-6">
                  {/* Dark green icon circle */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center 
                                 rounded-2xl bg-brand-dark 
                                 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-brand-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading flex-1 text-xl md:text-2xl text-brand-dark 
                                 group-hover:text-brand-primary transition-colors duration-300 pt-1">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="flex-1 text-base leading-relaxed text-brand-dark/80 
                             group-hover:text-brand-dark/90 mb-6">
                  {service.description}
                </p>

                {/* Hover arrow */}
                <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 self-start">
                  <svg className="h-5 w-5 text-brand-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-sm font-semibold text-brand-primary uppercase tracking-wide">Learn More</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
