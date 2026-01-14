// src/components/ServicesSection/AgroforestrySection.jsx
import React from "react";
import agroforestryImg from "../../assets/images/close-up-bamboo.jpg";

const AgroforestrySection = () => {

  const features = [
  "Scientific agroforestry design based on land and climate conditions",
  "Plantation establishment and technical handholding",
  "Market and value chain linkages for agroforestry produce",
  "Support for income diversification and sustainability",
];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-900 via-brand-dark to-gray-900 text-brand-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Layout */}
        <div className="grid gap-14 lg:grid-cols-[420px_1fr] items-start">
          
          {/* IMAGE — LEFT (TALL RECTANGULAR) */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black/20">
              <img
                src={agroforestryImg}
                alt="Agroforestry plantation with perennial plants"
                className="
                  w-full
                  h-[520px]
                  lg:h-[620px]
                  object-cover
                  object-center
                "
                loading="lazy"
              />

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-emerald-400 text-gray-900 text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                Climate-Resilient Income
              </div>
            </div>
          </div>

          {/* CONTENT — RIGHT */}
          <div className="max-w-3xl space-y-8">
            
            {/* Title */}
             <header className="space-y-4">
              <span className="inline-flex px-4 py-2 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wide text-emerald-100">
                Sustainable Farming
              </span>

              <h2
                id="agroforestry-title"
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent"
              >
                Agroforestry
              </h2>
            </header>


            {/* Description */}
            <div className="space-y-6 text-lg leading-relaxed text-brand-white/90">
              <p>
                Negam Care enables integration of perennial plantations into structured
                farming systems to support sustainable, climate-resilient, and
                productive land use.
              </p>

              <p>
                Working with institutions and landholders, we design and implement
                agroforestry models that improve soil health, optimise land
                productivity, and create long-term income opportunities through strong
                market linkages.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="space-y-4">
              <p className="text-lg font-semibold text-emerald-200">
                Key focus areas include:
              </p>

              <div
  className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4"
  role="list"
  aria-label="Key agroforestry offerings"
>
  {features.map((feature, index) => (
    <div
      key={index}
      className="
        group flex items-start gap-3 p-4
        rounded-xl bg-white/5 backdrop-blur-sm
        border border-white/10
        hover:bg-white/10
        transition-all duration-300
        hover:scale-[1.02]
      "
      role="listitem"
    >
      {/* Indicator dot */}
      <div
        className="
          flex-shrink-0 w-2 h-2 rounded-full
          bg-gradient-to-r from-emerald-400 to-teal-400
          mt-2
          group-hover:scale-125
          transition-transform duration-300
        "
      />

      {/* Text */}
      <span
        className="
          text-sm md:text-base leading-relaxed
          text-brand-white/90
          group-hover:text-emerald-200
          transition-colors
        "
      >
        {feature}
      </span>
    </div>
  ))}
</div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AgroforestrySection;
