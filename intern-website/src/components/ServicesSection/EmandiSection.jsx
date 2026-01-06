// src/components/ServicesSection/EmandiSection.jsx
import emandiImg from '../../assets/images/emandi.jpg'

const EmandiSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-dark text-brand-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          
          {/* Text + feature list */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                             bg-brand-white/10 text-xs font-semibold 
                             tracking-wide uppercase">
              Digital Platform
            </span>

            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-4">
              E‑Mandi Digital Commodity Trading
            </h2>

            <p className="text-base md:text-lg opacity-90 leading-relaxed mb-4">
              E‑mandi is designed to enable transparent, efficient, and digitally driven agricultural trade.
            </p>
            <p className="text-base md:text-lg opacity-90 leading-relaxed mb-6">
              The platform connects producers, buyers, logistics, warehousing, and payment infrastructure into a single structured framework.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <ul className="space-y-2">
                <li>• Direct producer–buyer marketplace</li>
                <li>• Integration with APMC systems</li>
              </ul>
              <ul className="space-y-2">
                <li>• Tools for price discovery & quality assessment</li>
                <li>• Access pathways for organised farmer collectives</li>
              </ul>
            </div>
          </div>

          {/* Image / UI mock */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-2xl bg-brand-primary/30">
              <img
                src={emandiImg}
                alt="E‑mandi digital trading interface on devices"
                className="h-80 md:h-96 w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-brand-accent text-brand-dark 
                            text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
              Structured, transparent agri trade
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmandiSection
