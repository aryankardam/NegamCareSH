// src/components/Hero.jsx
import heroImage from "../../assets/images/hero-field.png";

const Hero = () => {
  return (
    <section
      className="relative flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
      }}
    >
      {/* Dark green overlay using brand variable */}
      <div className="absolute inset-0 bg-brand-dark/70" />

      <div className="relative mx-auto flex w-full max-w-7xl px-6 py-24">
        <div className="max-w-xl">
          {/* <h1 className="font-heading text-4xl leading-tight text-brand-white md:text-5xl lg:text-6xl">
            Building Future-Ready Agri Value Chains
          </h1> */}
          <h1 className="font-heading text-4xl leading-tight text-brand-white md:text-5xl lg:text-6xl font-bold tracking-tight">
            Building Future -Ready 
            <span className="block text-brand-accent mt-2">Agri Value Chains</span>
          </h1>

          <p className="mt-6 text-base text-brand-white/90 md:text-lg">
            Integrating research, agri-processing, and digital trade to
            strengthen transparent, scalable, and sustainable agricultural
            ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
