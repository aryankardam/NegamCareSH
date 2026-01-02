// src/components/AboutSection/AboutOverview.jsx
import overviewImage from "../../assets/images/about-overview.jpg";

const AboutOverview = () => {
  return (
    <div className="space-y-10">

      {/* Section Heading */}
      <header>
        <h2 className="font-heading text-2xl md:text-3xl 
                       text-[color:var(--color-brand-dark)] mb-4">
          Overview
        </h2>

        <p className="max-w-3xl text-base md:text-lg 
                      text-[color:var(--color-brand-dark)]/70 
                      leading-relaxed">
          An overview of Negam Care’s role, focus areas, and approach within the
          agricultural ecosystem.
        </p>
      </header>

      {/* Content */}
      <div className="max-w-4xl space-y-6 text-base md:text-lg 
                      text-[color:var(--color-brand-dark)]/80 
                      leading-relaxed">
        <p>
          Negam Care is a purpose-driven agri-technology enterprise focused on
          integrating research, processing, and digital trade to improve
          agricultural outcomes.
        </p>

        <p>
          The company works across cultivation, value addition, and market
          enablement to support transparent, efficient, and scalable
          agri-value chains aligned with institutional and policy frameworks.
        </p>
      </div>

      {/* Supporting Image */}
      <div className="mt-10 overflow-hidden rounded-2xl 
                      border border-[color:var(--color-brand-dark)]/10">
        <img
          src={overviewImage}
          alt="Negam Care agricultural research, processing, and digital operations"
          className="w-full h-80 md:h-96 object-cover"
          loading="lazy"
        />
      </div>

    </div>
  );
};

export default AboutOverview;
