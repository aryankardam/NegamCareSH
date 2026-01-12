import heroBg from "../../assets/images/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed1.jpg";

const ServicesHero = () => {
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
              Our
              <span className="text-brand-accent"> Services</span>
            </h1>
            {/* <p className="max-w-3xl text-base md:text-lg
                      text-[color:var(--color-brand-white)]/80
                      leading-relaxed">
                Services spanning processing, digital trading, sourcing, logistics, and institutional enablement to support structured agricultural trade
            </p> */}
          </div>
        </section>
  );
};

export default ServicesHero;
