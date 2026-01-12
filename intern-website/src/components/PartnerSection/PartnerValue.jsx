// src/components/PartnerSection/PartnerValue.jsx

import { FaLink } from "react-icons/fa";
import { GiChart } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";

const PartnerValue = () => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-gray-50/70 to-brand-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl text-brand-dark font-black mb-6">
            Why Partner With Negam Care
          </h2>
          <p className="mx-auto max-w-4xl text-lg md:text-xl text-brand-dark/70 leading-relaxed">
            Single operating framework combining research insights, processing
            infrastructure, and digital trade systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {[
            {
              number: "01",
              title: "End-to-End Integration",
              desc: "Research to market continuity with seamless execution",
              icon: <FaLink />,
            },
            {
              number: "02",
              title: "Digital Transparency",
              desc: "Structured platforms for price discovery and traceability",
              icon: <GiChart />,
            },
            {
              number: "03",
              title: "Nationwide Scale",
              desc: "Logistics and sourcing networks across India",
              icon: <GiWorld />,
            },
            {
              number: "04",
              title: "Policy Compliance",
              desc: "Regulatory alignment for sustainable growth",
              icon: <FaBalanceScale />,
            },
          ].map(({ title, desc, icon }, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl border border-brand-dark/10 
             bg-white shadow-sm hover:shadow-2xl hover:shadow-brand-accent/25 
             hover:-translate-y-2 hover:border-brand-primary/30 
             transition-all duration-500 h-full text-center"
            >
              {/* Icon wrapper */}
              <div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center 
               rounded-2xl bg-brand-accent/10 text-3xl
               transition-all duration-300
               group-hover:scale-110 group-hover:bg-brand-accent/20
               group-hover:text-brand-primary"
              >
                <span role="img" aria-label={title}>
                  {icon}
                </span>
              </div>

              <h3
                className="font-heading text-lg md:text-xl text-brand-dark 
               font-bold mb-4 transition-colors
               group-hover:text-brand-primary"
              >
                {title}
              </h3>

              <p
                className="text-sm md:text-base text-brand-dark/80
               leading-relaxed transition-colors
               group-hover:text-brand-dark/95"
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerValue;
