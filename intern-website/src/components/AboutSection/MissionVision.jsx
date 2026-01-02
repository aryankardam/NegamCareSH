// src/components/AboutSection/MissionVision.jsx
const MissionVision = () => {
  return (
    <section className="py-16 md:py-20 bg-[color:var(--color-brand-white)]">
      <div className="mx-auto max-w-5xl px-6">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl 
                         text-[color:var(--color-brand-dark)] mb-4">
            Mission & Vision
          </h2>

          <p className="max-w-3xl text-base md:text-lg 
                        text-[color:var(--color-brand-dark)]/70 
                        leading-relaxed">
            Guiding principles that define Negam Care’s purpose and long-term
            direction within the agricultural ecosystem.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="border-l-4 border-[color:var(--color-brand-primary)] pl-6">
            <h3 className="font-heading text-xl md:text-2xl 
                           text-[color:var(--color-brand-dark)] mb-3">
              Our Mission
            </h3>

            <p className="text-base md:text-lg 
                          text-[color:var(--color-brand-dark)]/80 
                          leading-relaxed">
              To enable sustainable agricultural growth through innovation, research collaboration, and digital transformation—integrating cultivation, processing, and transparent trade systems to support farming communities and market ecosystems.
            </p>
          </div>

          {/* Vision */}
          <div className="border-l-4 border-[color:var(--color-brand-primary)] pl-6">
            <h3 className="font-heading text-xl md:text-2xl 
                           text-[color:var(--color-brand-dark)] mb-3">
              Our Vision
            </h3>

            <p className="text-base md:text-lg 
                          text-[color:var(--color-brand-dark)]/80 
                          leading-relaxed">
             To contribute to a resilient and inclusive agricultural ecosystem by strengthening research linkages, improving value realisation, and enabling efficient market access across India and beyond.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
