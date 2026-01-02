// src/components/HomeSection/PartnerCTA.jsx
import { useNavigate } from "react-router-dom";
import partnerImage from "../../assets/images/partner-with-us.jpg";

const PartnerCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="bg-brand-accent py-16 md:py-20 text-brand-dark">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">

          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              Partner with us
            </h2>

            <p
              className="mb-10 max-w-xl text-base md:text-lg
                         text-brand-dark/90
                         leading-relaxed"
            >
              Collaborate with Negam Care to strengthen agri-value chains through research integration, processing capabilities, and digital market solutions.
            </p>

            {/* CTA — dark fill on hover (industry-safe) */}
            <button
              onClick={handleContactClick}
              className="group relative inline-flex items-center
                         overflow-hidden rounded-full
                         bg-brand-dark
                         px-8 py-3 text-sm font-semibold uppercase tracking-wide
                         text-brand-white
                         transition-shadow duration-300 ease-out
                         hover:shadow-xl
                         focus:outline-none focus:ring-4
                         focus:ring-brand-accent/30"
            >
              {/* Hover fill overlay */}
              <span
                className="absolute left-0 top-0 h-full w-0
                           bg-brand-primary
                           transition-all duration-300 ease-out
                           group-hover:w-full group-active:w-full"
                aria-hidden="true"
              />

              {/* Button text */}
              <span className="relative z-10">
                Explore Partnerships
              </span>
            </button>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl bg-brand-white/10">
            <img
              src={partnerImage}
              alt="Institutional stakeholders collaborating on agricultural initiatives"
              className="h-80 w-full object-cover md:h-full lg:h-96"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/15 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
