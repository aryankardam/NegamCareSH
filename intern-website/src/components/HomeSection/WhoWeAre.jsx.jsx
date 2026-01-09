// src/components/WhoWeAre.jsx - Enhanced Industry Standard Version
import React from "react";
import { useNavigate } from "react-router-dom";
import whoImage from "../../assets/images/who-we-are-farmers.jpg";

const WhoWeAre = () => {
  const navigate = useNavigate();

  const handleKnowMore = (e) => {
    e.preventDefault();
    // Smooth scroll + navigate
    document.documentElement.style.scrollBehavior = "smooth";
    navigate("/about");
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-linear-to-br from-brand-white via-white/95 to-brand-primary/5 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-accent/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-brand-primary/10 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_2s_infinite]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-3xl shadow-2xl lg:shadow-3xl 
                       overflow-hidden bg-white/80 backdrop-blur-sm border border-brand-primary/10 hover:border-brand-primary/20 transition-all duration-500">
          
          {/* Content Panel - Enhanced */}
          <div className="lg:col-span-2 bg-linear-to-br from-brand-accent/95 to-brand-primary/95">
            <div className="relative z-10 flex h-full flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-20">
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/40 text-white text-sm font-semibold uppercase tracking-wider">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                Our Mission
              </div>

              {/* Enhanced Heading */}
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 md:mb-8 leading-tight tracking-tight drop-shadow-lg">
                Who We <span className="block lg:inline text-brand-white/95">Are</span>
              </h2>

              {/* Content Cards */}
              <div className="space-y-6 mb-10 md:mb-12">
                <div className="group p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand-dark/60">
                    Agri-Tech Intersection
                  </h3>
                  <p className="text-base md:text-lg text-white/95 leading-relaxed">
                    Negam Care operates at agriculture ↔ technology intersection, 
                    integrating research, value-added processing, and digital market enablement.
                  </p>
                </div>

                <div className="group p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand-dark/60">
                    Innovation to Impact
                  </h3>
                  <p className="text-base md:text-lg text-white/95 leading-relaxed">
                    Institutional collaboration + on-ground execution = measurable outcomes 
                    across cultivation, processing, and trade ecosystems.
                  </p>
                </div>
              </div>

              {/* Premium CTA Button */}
              <button
                onClick={handleKnowMore}
                className="group relative mt-10 inline-flex w-fit items-center justify-center gap-3 rounded-2xl 
                          bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:border-white
                          px-10 py-5 text-lg font-bold uppercase tracking-[0.15em] 
                          text-white overflow-hidden transition-all duration-500 
                          hover:shadow-2xl hover:shadow-white/20 hover:scale-[1.02] 
                          hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-white/50
                          active:scale-[0.98]"
                aria-label="Learn more about Negam Care"
              >
                <span className="relative z-10 font-semibold tracking-wide">Discover More</span>
                
                {/* Shine Animation */}
                <span className="absolute inset-0 bg-linear-to-r from-white/30 via-white/50 to-transparent 
                                -skew-x-12 transform -translate-x-[120%] group-hover:translate-x-[120%]
                                transition-transform duration-1000 ease-out h-full w-1/3" 
                      aria-hidden="true" />
                
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Panel - Enhanced */}
          <div className="relative col-span-1 h-80 md:h-96 lg:h-full overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent 
                           group-hover:from-black/50 transition-all duration-500" />
            
            <img
              src={whoImage}
              alt="Negam Care team working with farmers in lush green agricultural fields, demonstrating on-ground collaboration"
              className="h-full w-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            
            {/* Hover overlay stats */}
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl border border-white/50 text-brand-dark text-sm font-semibold uppercase tracking-wider">
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                Real Impact in Fields
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
