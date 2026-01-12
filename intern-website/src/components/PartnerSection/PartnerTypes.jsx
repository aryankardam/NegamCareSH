// src/components/PartnerSection/PartnerTypes.jsx
import govImg from '../../assets/images/indian-farmer-with-agronomist-cotton-field-showing-some-information-tab.jpg'
import researchImg from '../../assets/images/laboratory-mask-woman-with-plants-magnifying-glass-research-safety-medical-engineering-biotech-botany-leaves-scientist-technician-checking-agro-study-growth-science.jpg'
import marketImg from '../../assets/images/young-plant-seedling-growing-sunlight-environmental-ecology-concept-sources-renewable-sustainable-development-digital-technology-agriculture-smart-farming-concept.jpg'
import { GiMicroscope } from "react-icons/gi";
import { BiSolidBank } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";

const PARTNER_TYPES = [
  {
    title: 'Government Bodies',
    desc: 'Collaborate on programmes focused on market integration, digital enablement, and value-chain efficiency aligned with agricultural policy objectives.',
    img: govImg,
    icon: <BiSolidBank />
  },
  {
    title: 'Research Institutions',
    desc: 'Engage in applied research, pilot initiatives, and translational projects spanning seed systems, cultivation practices, and agri-processing innovation.',
    img: researchImg,
    icon: <GiMicroscope />
  },
  {
    title: 'Market & Ecosystem Partners',
    desc: 'Partner across sourcing, processing, logistics, and digital trade to support scalable and transparent agricultural operations.',
    img: marketImg,
    icon: <TbWorld />
  }
]

const PartnerTypes = () => (
  <section className="py-16 md:py-24 bg-[color  :var(--color-brand-white)]">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mb-16 lg:mb-20 text-center">
        <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl text-brand-dark font-black mb-6">
          Who We Partner With
        </h2>
        <p className="mx-auto max-w-4xl text-lg md:text-xl text-brand-dark/70 leading-relaxed">
          Strategic collaborations across government, research, and market ecosystems to scale transparent and efficient agricultural operations.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PARTNER_TYPES.map(({ title, desc, img, icon }, idx) => (
          <article 
            key={idx}
            className="group relative rounded-3xl border border-brand-dark/10 
                      bg-white shadow-sm hover:shadow-2xl hover:shadow-brand-accent/25 
                      hover:-translate-y-3 hover:border-brand-primary/30 
                      transition-all duration-500 overflow-hidden cursor-pointer"
            onClick={() => {/* handle partner type click */}}
          >
            {/* Image */}
            <div className="relative overflow-hidden h-48 md:h-56 lg:h-64">
              <img
                src={img}
                alt={`${title} partnership`}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-dark rounded-2xl flex items-center justify-center 
                               shadow-lg group-hover:scale-110 group-hover:bg-brand-primary transition-all">
                  <span className="text-2xl text-brand-white">{icon}</span>
                </div>
                <h3 className="font-heading text-lg md:text-xl lg:text-2xl text-brand-dark 
                            font-bold  group-hover:text-brand-primary transition-colors">
                {title}
              </h3>
              </div>
              <p className="text-base md:text-lg text-brand-dark/80 leading-relaxed 
                        group-hover:text-brand-dark/95 transition-colors">
                {desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default PartnerTypes
