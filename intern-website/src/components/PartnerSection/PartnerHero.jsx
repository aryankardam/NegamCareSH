// src/components/PartnerSection/PartnerHero.jsx
import heroBg from "../../assets/images/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed1.jpg";

const PartnerHero = () => {
  return (
    <section
          className="relative flex items-end h-[30vh] md:h-[35vh] lg:h-[40vh]"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Same overlay as main Hero */}
          <div className="absolute inset-0 bg-brand-dark/70" />
    
          {/* Content */}
          <div className="relative w-full max-w-7xl  mx-auto px-6 pb-6 md:pb-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-white">
              Partner With
              <span className="text-brand-accent"> Us</span>
            </h1>
          </div>
    </section>
  )
}

export default PartnerHero
