import valueChainImage from "../../assets/images/value-chain-agri.png";

const ValueChainApproach = () => {
  return (
    <section className="bg-[color:var(--color-brand-accent)]/10 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <h2
            className="font-heading text-2xl md:text-3xl lg:text-4xl
                       text-[color:var(--color-brand-dark)] mb-4"
          >
            Integrated Agri Value-Chain Approach
          </h2>

          <p
            className="text-base md:text-lg
                       text-[color:var(--color-brand-dark)]/70
                       leading-relaxed"
          >
            Negam Care operates across the agricultural value chain by integrating
            research, cultivation, processing, and digital trade within a single,
            structured operating framework. This approach enables transparency,
            efficiency, and long-term value creation for farmers, markets, and
            institutional stakeholders.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">

          {/* Value Chain Steps */}
          <div className="space-y-8">

            {/* Step 1 */}
            <div className="border-l-4 border-[color:var(--color-brand-primary)] pl-6">
              <h3
                className="font-heading text-xl md:text-2xl
                           text-[color:var(--color-brand-dark)] mb-2"
              >
                Agricultural Research & Cultivation
              </h3>
              <p
                className="text-base md:text-lg
                           text-[color:var(--color-brand-dark)]/80
                           leading-relaxed"
              >
                University-led and applied agricultural research focused on seed
                development, cultivation practices, and phytochemical
                applications, translated into structured on-ground cultivation
                programs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-[color:var(--color-brand-primary)] pl-6">
              <h3
                className="font-heading text-xl md:text-2xl
                           text-[color:var(--color-brand-dark)] mb-2"
              >
                Agri Processing & Value Addition
              </h3>
              <p
                className="text-base md:text-lg
                           text-[color:var(--color-brand-dark)]/80
                           leading-relaxed"
              >
                Value-added agri-processing infrastructure supporting extraction,
                drying, packaging, and export-ready product development, aimed at
                improving realisation and reducing post-harvest losses.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-[color:var(--color-brand-primary)] pl-6">
              <h3
                className="font-heading text-xl md:text-2xl
                           text-[color:var(--color-brand-dark)] mb-2"
              >
                Digital Trade & Market Enablement
              </h3>
              <p
                className="text-base md:text-lg
                           text-[color:var(--color-brand-dark)]/80
                           leading-relaxed"
              >
                Digital agri-commodity trading platforms enabling transparent
                price discovery, direct producer-buyer transactions, and
                integration with APMC systems, logistics, and payment
                infrastructure.
              </p>
            </div>

            {/* Step 4 */}
            <div className="border-l-4 border-[color:var(--color-brand-primary)] pl-6">
              <h3
                className="font-heading text-xl md:text-2xl
                           text-[color:var(--color-brand-dark)] mb-2"
              >
                Institutional Integration & Logistics
              </h3>
              <p
                className="text-base md:text-lg
                           text-[color:var(--color-brand-dark)]/80
                           leading-relaxed"
              >
                Strengthening APMC markets, farmer producer organisations (FPOs),
                and institutional trade through sourcing, aggregation, and
                multimodal logistics support across large-scale agricultural
                footprints.
              </p>
            </div>

          </div>

          {/* Supporting Image */}
          <div
            className="relative overflow-hidden rounded-3xl
                       bg-[color:var(--color-brand-white)]
                       border border-[color:var(--color-brand-dark)]/10"
          >
            <img
              src={valueChainImage}
              alt="Integrated agricultural value chain from research and cultivation to processing and digital trade"
              className="h-full w-full object-cover"
            />

            {/* Context Label */}
            <div
              className="absolute bottom-4 left-4 rounded-xl
                         bg-[color:var(--color-brand-white)]/95
                         px-4 py-2 shadow-sm"
            >
              <p
                className="text-xs font-medium
                           text-[color:var(--color-brand-dark)]"
              >
                Research • Processing • Digital Trade • Logistics
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueChainApproach;
