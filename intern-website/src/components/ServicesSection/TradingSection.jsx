// src/components/ServicesSection/TradingSection.jsx
import tradingImg from '../../assets/images/hand-is-holding-smartphone-with-infographics-background-plantations-sweet-bell-pepper-farming-agriculture-cultivation-harvesting-farmland-production-agricultural-products.jpg'

const TradingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        {/* Image left */}
        <div className="order-2 lg:order-1 relative group">
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-brand-primary/10">
            <img
              src={tradingImg}
              alt="Digital agri-commodity trading platform dashboard"
              className="h-80 md:h-96 w-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 shadow-lg">
            <p className="text-xs font-semibold text-brand-dark">
              E‑mandi digital marketplace
            </p>
          </div>
        </div>

        {/* Text right */}
        <div className="order-1 lg:order-2">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl 
                        text-brand-dark font-bold mb-4">
            Digital Commodity Trading (E‑mandi)
          </h2>

          <p className="text-base md:text-lg text-brand-dark/80 leading-relaxed mb-4">
            E‑mandi is Negam Care&apos;s digital commodity trading platform that enables structured, transparent agricultural transactions.
          </p>
          <p className="text-base md:text-lg text-brand-dark/80 leading-relaxed mb-6">
            The platform is designed to support price discovery, transaction efficiency, and integration with existing market systems.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-sm md:text-base text-brand-dark/80">
            <ul className="space-y-2">
              <li>• Digital marketplace for producer–buyer transactions</li>
              <li>• Price discovery and transparent bidding tools</li>
            </ul>
            <ul className="space-y-2">
              <li>• Integration with APMC, warehousing, logistics, payments</li>
              <li>• Analytics to support quality and value-addition pathways</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradingSection
