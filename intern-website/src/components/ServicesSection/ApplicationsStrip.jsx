// src/components/ServicesSection/ApplicationsStrip.jsx
const ApplicationsStrip = () => (
  <section className="py-14 bg-brand-primary text-brand-white">
    <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-center">
      <div>
        <h2 className="font-heading text-2xl md:text-3xl mb-4">
          Agricultural Applications & Footprint
        </h2>
        <p className="text-base md:text-lg opacity-90 leading-relaxed">
          Negam Care supports value-added agri-processing units, digital commodity trading and market enablement, integrated supply-chain logistics, and a managed cultivation footprint spanning over 1,000 acres across India.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white/10 p-4">
          <div className="text-2xl font-bold">1,000+ acres</div>
          <p className="text-sm opacity-90">Managed cultivation footprint</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-4">
          <div className="text-2xl font-bold">Pan‑India</div>
          <p className="text-sm opacity-90">Sourcing & logistics network</p>
        </div>
      </div>
    </div>
  </section>
)
export default ApplicationsStrip
