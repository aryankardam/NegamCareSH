// CareersHeader.jsx - Content Header Section
import React from 'react';
import { GiMicroscope } from "react-icons/gi";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { PiPlantFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";

const CareersHeader = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28 bg-linear-to-b from-white/90 to-transparent relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 mb-16 lg:mb-24 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-3 px-8 py-4 
                        bg-brand-dark
                        text-brand-white text-sm md:text-base font-semibold uppercase 
                        tracking-[0.25em] rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 
                        transition-all duration-300 cursor-pointer mb-8 mx-auto border border-white/20 group">
          <div className="w-2 h-2 bg-white rounded-full animate-ping group-hover:scale-110 transition-transform" />
          Careers at Negam Care
        </span>
        
        {/* Main Heading */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl 
                       text-brand-dark font-black mb-8 md:mb-12 
                       leading-tight bg-linear-to-r from-brand-dark 
                       via-brand-primary to-brand-dark 
                       bg-clip-text drop-shadow-lg">
          Build the Future of
          <br className="hidden lg:block" />
          <span className="block lg:inline text-brand-accent drop-shadow-2xl">
            Agri-Tech Innovation
          </span>
        </h1>
        
        {/* Description - Brochure Content */}
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-xl md:text-2xl lg:text-3xl text-brand-dark/85 
                        leading-normal md:leading-relaxed font-light">
            We're seeking passionate professionals to join our mission-driven team 
            operating at the intersection of <strong>high-tech agriculture R&D</strong>, 
            digital supply chain solutions, and sustainable processing infrastructure.
          </p>
          
          {/* <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-lg md:text-xl text-brand-dark/75">
            <div>
              • High-tech agriculture R&D<br/>
              • Digital agri-trading<br/>
              • Strong university research links 
            </div>
            <div>
              • Sustainable processing infrastructure<br/>
              • Institutional partnerships<br/>
              • Farmer ecosystem strengthening
            </div>
          </div> */}
          
          
        </div>
      </div>

      {/* Focus Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
  {[
    { icon: <GiMicroscope />, title: 'R&D Innovation', desc: 'High-tech agriculture' },
    { icon: <HiDevicePhoneMobile />, title: 'Digital Trading', desc: 'Agri platforms' },
    { icon: <PiPlantFill />, title: 'Sustainable', desc: 'Processing infra' },
    { icon: <FaHandshake />, title: 'Partnerships', desc: 'University links' }
  ].map((item, idx) => (
    <div key={idx} className="group p-8 rounded-3xl bg-white/80 backdrop-blur-xl 
                              border border-brand-primary/10 
                              hover:bg-white hover:shadow-2xl hover:border-brand-primary/30 
                              hover:-translate-y-4 transition-all duration-500 text-center cursor-default">
      <div className="text-5xl lg:text-5xl mb-6 group-hover:scale-110 group-hover:text-brand-primary transition-all duration-300 flex justify-center items-center h-20 mx-auto">
        {item.icon}
      </div>
      <h3 className="font-bold text-xl lg:text-2xl text-brand-dark mb-3 
                     group-hover:text-brand-primary transition-all duration-300">
        {item.title}
      </h3>
      <p className="text-sm lg:text-base text-brand-dark/70 font-medium">
        {item.desc}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default CareersHeader;
