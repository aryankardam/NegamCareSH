// src/components/ServicesSection/LogisticsSection.jsx
import logisticsImg from '../../assets/images/logistics.jpg'

const LogisticsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        {/* Text */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                           bg-brand-accent/15 text-xs font-semibold 
                           tracking-wide uppercase text-brand-primary mb-4">
            Service 03
          </span>

          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl 
                        text-brand-dark font-bold mb-4">
            Agri Sourcing, Aggregation & Logistics
          </h2>

          <p className="text-base md:text-lg text-brand-dark/80 leading-relaxed mb-4">
            Negam Care operates nationwide sourcing and aggregation networks supported by multimodal logistics.
          </p>
          <p className="text-base md:text-lg text-brand-dark/80 leading-relaxed mb-6">
            This enables efficient movement, consolidation, and distribution of agricultural commodities across regions and markets.
          </p>

          <ul className="space-y-2 text-sm md:text-base text-brand-dark/80">
            <li>• Aggregation centres across producing regions</li>
            <li>• Multimodal transport (road, rail, cold chain where relevant)</li>
            <li>• Traceable movement from farm-gate to markets</li>
            <li>• Integration with digital trading and warehousing</li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-brand-primary/10">
            <img
              src={logisticsImg}
              alt="Agri logistics and aggregation network"
              className="h-80 md:h-96 w-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 shadow-lg">
            <p className="text-xs font-semibold text-brand-dark">
              Nationwide sourcing & multimodal logistics
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogisticsSection
