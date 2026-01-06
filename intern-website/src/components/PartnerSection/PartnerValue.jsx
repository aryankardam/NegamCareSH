// src/components/PartnerSection/PartnerValue.jsx - Interactive Value Grid
const PartnerValue = () => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-gray-50/70 to-brand-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl text-brand-dark font-black mb-6">
            Why Partner With Negam Care
          </h2>
          <p className="mx-auto max-w-4xl text-lg md:text-xl text-brand-dark/70 leading-relaxed">
            Single operating framework combining research insights, processing infrastructure, and digital trade systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {[
            {
              number: '01',
              title: 'End-to-End Integration',
              desc: 'Research to market continuity with seamless execution',
              icon: '🔗'
            },
            {
              number: '02',
              title: 'Digital Transparency',
              desc: 'Structured platforms for price discovery and traceability',
              icon: '📊'
            },
            {
              number: '03',
              title: 'Nationwide Scale',
              desc: 'Logistics and sourcing networks across India',
              icon: '🗺️'
            },
            {
              number: '04',
              title: 'Policy Compliance',
              desc: 'Regulatory alignment for sustainable growth',
              icon: '⚖️'
            }
          ].map(({ number, title, desc, icon }, idx) => (
            <div 
              key={idx}
              className="group relative p-8 rounded-3xl border border-brand-dark/10 
                        bg-white shadow-sm hover:shadow-2xl hover:shadow-brand-accent/25 
                        hover:-translate-y-2 hover:border-brand-primary/30 
                        transition-all duration-500 h-full"
            >
              {/* Number badge */}
              <div className="absolute -top-6 left-6 w-14 h-14 bg-linear-to-r 
                             from-brand-primary to-brand-accent 
                             rounded-2xl flex items-center justify-center text-xl font-black 
                             text-white shadow-2xl group-hover:scale-110 transition-all">
                {number}
              </div>
              
              {/* Icon */}
              <div className="text-4xl mb-6 mx-auto group-hover:scale-110 transition-all">
                <span role="img" aria-label={title}>{icon}</span>
              </div>
              
              <h3 className="font-heading text-lg md:text-xl text-brand-dark 
                            font-bold mb-4 text-center group-hover:text-brand-primary transition-colors">
                {title}
              </h3>
              
              <p className="text-sm md:text-base text-brand-dark/80
                          text-center leading-relaxed group-hover:text-brand-dark/95 transition-colors">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerValue
