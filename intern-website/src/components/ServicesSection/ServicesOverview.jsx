// src/components/ServicesSection/ServicesOverview.jsx
import { FaSeedling, FaIndustry, FaChartLine, FaTruck, FaUniversity } from 'react-icons/fa'

const SERVICES = [
  {
    icon: FaIndustry,
    title: 'Agri-Processing & Value Addition',
    text: 'Infrastructure and operational frameworks for drying, extraction, packaging, and quality standardisation to improve shelf life and market readiness.'
  },
  {
    icon: FaTruck,
    title: 'Agri Sourcing, Aggregation & Logistics',
    text: 'Nationwide sourcing and aggregation networks supported by multimodal logistics for efficient movement and consolidation.'
  },
  {
    icon: FaUniversity,
    title: 'Institutional & Market Enablement',
    text: 'Support for market integration through technology adoption, operational frameworks, and alignment with regulatory structures.'
  },
  {
    icon: FaChartLine,
    title: 'Digital Commodity Trading (E‑mandi)',
    text: 'Digital trading platform enabling structured, transparent agricultural transactions and price discovery integrated with existing market systems.'
  },
]

const ServicesOverview = () => (
  <section className="py-16 md:py-24 bg-brand-white">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-2xl md:text-4xl text-brand-dark font-bold mb-4">
          Core Service Pillars
        </h2>
        <p className="max-w-3xl mx-auto text-brand-dark/70 text-base md:text-lg">
          Integrated services designed to connect upstream cultivation with downstream markets through technology and infrastructure.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="group rounded-3xl border border-brand-dark/10 bg-white p-6 md:p-8 
                       shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl 
                            bg-brand-primary text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-lg md:text-xl text-brand-dark mb-3">
              {title}
            </h3>
            <p className="text-sm md:text-base text-brand-dark/75 leading-relaxed">
              {text}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
)
export default ServicesOverview
