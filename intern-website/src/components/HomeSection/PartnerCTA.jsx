// src/components/HomeSection/PartnerCTA.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import partnerImage from "../../assets/images/close-up-picture-hand-passing-sapling-plant-another-hand.jpg";

const PartnerCTA = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    document.documentElement.style.scrollBehavior = "smooth";
    navigate("/contact");
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-linear-to-br from-brand-accent/95 via-brand-accent to-brand-primary/90 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-xl animate-[pulse_5s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_2s_infinite]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid items-center gap-12 md:gap-20 lg:gap-24 md:grid-cols-2">
          
          {/* Content Panel - Enhanced */}
          <div className="space-y-8 md:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/40 text-white text-sm font-semibold uppercase tracking-wider animate-fade-in-up">
              <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              Strategic Partnerships
            </div>

            {/* Enhanced Heading */}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 md:mb-8 leading-tight tracking-tight drop-shadow-2xl animate-fade-in-up animation-delay-200">
              Partner
              <br className="hidden lg:block" />
              <span className="block lg:inline text-white/95 drop-shadow-lg">With Us</span>
            </h2>

            {/* Content */}
            <div className="space-y-6 mb-12">
              <div className="group p-6 bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/25 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand-dark/60">
                  Research Integration
                </h3>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                  Collaborate on cutting-edge agri R&D with university and institutional partners.
                </p>
              </div>

              <div className="group p-6 bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/25 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand-dark/60">
                  Market Solutions
                </h3>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                  Digital platforms + processing infrastructure for resilient value chains.
                </p>
              </div>
            </div>

            {/* Premium CTA Button */}
            <button
              onClick={handleContactClick}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl
                        bg-white/20 backdrop-blur-xl border-2 border-white/30 hover:border-white
                        px-12 py-5 lg:px-16 lg:py-6 text-lg lg:text-xl font-bold uppercase tracking-[0.15em] 
                        text-white shadow-xl hover:shadow-2xl hover:shadow-white/30 
                        hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 
                        focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-[0.98]"
              aria-label="Contact us to explore partnership opportunities"
            >
              <span className="relative z-10 font-semibold tracking-wide">Start Partnership</span>
              
              {/* Shine effect */}
              <span className="absolute inset-0 bg-linear-to-r from-white/40 via-white/60 to-transparent 
                              -skew-x-12 transform -translate-x-[120%] group-hover:translate-x-[120%]
                              transition-transform duration-1000 ease-out h-full w-1/3" 
                    aria-hidden="true" />
              
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Image Panel - Enhanced */}
          <div className="relative md:order-1 overflow-hidden rounded-3xl bg-white/10 shadow-2xl group cursor-pointer md:hover:shadow-3xl transition-all duration-700">
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <img
              src={partnerImage}
              alt="Negam Care partnership handshake - institutional collaboration for agricultural innovation and value chain development"
              className="h-80 w-full object-cover md:h-125 lg:h-full group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            
            {/* Stats overlay */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 bg-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl border border-white text-brand-dark text-sm font-bold uppercase tracking-wider">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse" />
                Ready to Collaborate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;