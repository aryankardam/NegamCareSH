// src/components/ServicesSection/ProcessingSection.jsx
import processingImg from '../../assets/images/processing.jpg'

const ProcessingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        {/* Text */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                           bg-brand-accent/15 text-xs font-semibold 
                           tracking-wide uppercase text-brand-primary mb-4">
            Service 01
          </span>

          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl 
                        text-brand-dark font-bold mb-4">
            Agri-Processing & Value Addition
          </h2>

          <p className="text-base md:text-lg text-brand-dark/80 leading-relaxed mb-4">
            Negam Care supports value-added processing through infrastructure and operational frameworks covering drying, extraction, packaging, and quality standardisation.
          </p>
          <p className="text-base md:text-lg text-brand-dark/80 leading-relaxed mb-6">
            These capabilities are designed to improve shelf life, compliance, and market readiness of agricultural produce, reducing wastage and improving realisation from farm output.
          </p>

          <ul className="space-y-2 text-sm md:text-base text-brand-dark/80">
            <li>• Primary and secondary drying infrastructure</li>
            <li>• Extraction and standardisation for value-added products</li>
            <li>• Packaging aligned with regulatory and export requirements</li>
            <li>• Quality control and traceability processes</li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-brand-accent/10">
            <img
              src={processingImg}
              alt="Agri-processing and value addition infrastructure"
              className="h-80 md:h-96 w-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 shadow-lg">
            <p className="text-xs font-semibold text-brand-dark">
              Processing infrastructure for farm output
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessingSection
