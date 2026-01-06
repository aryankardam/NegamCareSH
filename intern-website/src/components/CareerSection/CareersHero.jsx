// src/components/Careers/CareersHero.jsx
import heroBg from "../../assets/images/about-hero-agri.png";

const CareersHero = () => {
  return (
    <section
      className="relative flex items-end h-[30vh] md:h-[35vh] lg:h-[40vh]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-brand-dark/70" />
      <div className="relative w-full max-w-7xl  mx-auto px-6 pb-6 md:pb-10 lg:pb-12">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-brand-white drop-shadow-2xl">
          Join Our
          <span className="text-brand-accent drop-shadow-lg"> Team</span>
        </h1>
      </div>
    </section>
  );
};

export default CareersHero;
