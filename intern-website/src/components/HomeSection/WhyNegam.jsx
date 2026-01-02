// src/components/HomeSection/WhyNegam.jsx
import valueImage from "../../assets/images/why-negam-aerial.png";

const WhyNegam = () => {
  return (
    <section className="  bg-brand-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">

          {/* Image — LEFT */}
          <div className="relative overflow-hidden rounded-3xl bg-brand-accent/10 shadow-xl">
            <img
              src={valueImage}
              alt="Aerial view of integrated agricultural fields and logistics infrastructure"
              className="h-105 w-full object-cover md:h-120"
            />

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

            {/* Overlay Label */}
            <div
              className="absolute bottom-5 left-5 rounded-2xl 
                         bg-white/90 px-5 py-3 shadow-md backdrop-blur-sm"
            >
              <p className="text-sm font-semibold text-brand-dark">
                Integrated value-chain approach
              </p>
              <p className="text-xs text-brand-dark/70">
                From research plots to end markets
              </p>
            </div>
          </div>

          {/* Content — RIGHT */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-primary">
              Why Negam Care
            </p>

            <h2 className="font-heading text-3xl md:text-4xl text-brand-dark">
              A unified approach to agri-value chains
            </h2>

            <p className="mt-5 max-w-xl text-base md:text-lg 
                          text-brand-dark/80 
                          leading-relaxed">
              Negam Care brings together research-led insights, processing
              infrastructure, and digital trade systems within a unified
              operating framework—ensuring continuity from cultivation to
              transparent, scalable market access.
            </p>

            {/* Value Points */}
            <ul className="mt-8 space-y-4">
              {[
                "Research-led decision-making across agricultural value chains",
                "Technology-enabled price discovery and transparent market access",
                "Scalable sourcing and multimodal logistics networks across India",
                "Farmer-centric, institutionally aligned operating models",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-base 
                             text-brand-dark/80"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full 
                                   bg-brand-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyNegam;
