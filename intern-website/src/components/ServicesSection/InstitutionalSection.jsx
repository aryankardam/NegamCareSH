// src/components/ServicesSection/InstitutionalSection.jsx
import institutionalImg from '../../assets/images/institutional.jpg'

const InstitutionalSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        {/* Image left */}
        <div className="order-2 lg:order-1 relative group">
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-brand-accent/10">
            <img
              src={institutionalImg}
              alt="Institutional and market enablement discussions"
              className="h-80 md:h-96 w-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 shadow-lg">
            <p className="text-xs font-semibold text-brand-dark">
              Institutional & market integration
            </p>
          </div>
        </div>

        {/* Text right */}
        <div className="order-1 lg:order-2">
          {/* <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                           bg-brand-primary/10 text-xs font-semibold 
                           tracking-wide uppercase text-brand-primary mb-4">
            Service 04
          </span> */}

          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl 
                        text-brand-dark font-bold mb-4">
            Institutional & Market Enablement
          </h2>

          <p className="text-base md:text-lg text-brand-dark/80 leading-relaxed mb-4">
            Negam Care works with institutional stakeholders to support market integration through technology adoption and operational frameworks.
          </p>
          <p className="text-base md:text-lg text-brand-dark/80 leading-relaxed mb-6">
            Engagements align with regulatory and policy structures, enabling scalable, compliant agricultural operations.
          </p>

          <ul className="space-y-2 text-sm md:text-base text-brand-dark/80">
            <li>• Programmes with government bodies on market integration</li>
            <li>• Collaborations with research institutions for applied R&D</li>
            <li>• Partnerships with market ecosystem players across sourcing, processing, logistics and trade</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default InstitutionalSection
