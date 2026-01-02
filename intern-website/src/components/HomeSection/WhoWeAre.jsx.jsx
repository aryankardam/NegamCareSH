// src/components/WhoWeAre.jsx
import { useNavigate } from "react-router-dom";
import whoImage from "../../assets/images/who-we-are-farmers.jpg";

const WhoWeAre = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };

  return (
    <section className="py-16 md:py-20 bg-brand-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-stretch gap-0 rounded-3xl shadow-2xl md:grid-cols-3 md:overflow-hidden">
          {/* Content side - 2/3 width - Industry green background */}
          <div className="col-span-1 bg-brand-accent md:col-span-2">
            <div className="flex h-full flex-col justify-center p-8 md:p-12 lg:p-16">
              <h2 className="font-heading text-2xl text-brand-dark md:text-3xl lg:text-4xl">
                Who We Are
              </h2>

              <p className="mt-4 text-base leading-relaxed text-brand-dark md:text-lg">
                Negam Care operates at the intersection of agriculture and technology, working across research integration, value-added processing, and digital market enablement to support resilient agricultural value chains. 
              </p>

              <p className="mt-3 text-base leading-relaxed text-brand-dark/90 md:text-lg">
                Our approach combines institutional collaboration with on-ground execution, ensuring that innovation translates into measurable outcomes across cultivation, processing, and trade.
              </p>

              {/* Animated CTA Button with sweeping gradient */}
              <button
                onClick={handleKnowMore}
                className="group relative mt-8 inline-flex w-fit items-center rounded-full 
                           bg-brand-dark
                           px-8 py-3 text-sm font-semibold uppercase tracking-wide 
                           text-brand-white 
                           overflow-hidden transition-all hover:shadow-xl hover:shadow-brand-accent/25
                           focus:outline-none focus:ring-4 focus:ring-brand-accent/30"
              >
                <span className="relative z-10">Know more about us →</span>
                
                {/* Sweeping gradient animation */}
                <span 
                  className="absolute inset-0 bg-linear-to-r 
                             from-brand-accent/20 to-transparent 
                             -skew-x-12 transform -translate-x-full 
                             group-hover:translate-x-full
                             transition-transform duration-700 ease-out"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* Image side - 1/3 width */}
          <div className="col-span-1 md:relative md:h-96 lg:h-full">
            <img
              src={whoImage}
              alt="Field team working with farmers in green crops"
              className="h-full w-full object-cover md:absolute md:h-full md:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
