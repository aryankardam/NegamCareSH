// src/components/AboutSection/AboutHero.jsx - 30vh Image Height FIXED
import React from 'react'
import heroBg from '../../assets/images/about-hero-agri.jpg'

const AboutHero = () => {
  return (
    <section className="relative h-[30vh] lg:h-[30vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0" 
        style={{
          background: `
            linear-gradient(135deg, 
              var(--color-brand-primary) 0%, 
              var(--color-brand-dark) 50%, 
              var(--color-brand-accent) 100%
            ),
            url(${heroBg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Enhanced backdrop - FIXED */}
      <div className="absolute inset-0 bg-brand-dark/85 backdrop-blur-sm" />

      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-16 max-w-7xl">
        <div className="text-center text-brand-white max-w-4xl mx-auto">

          {/* Brand hierarchy - Compact for 30vh */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 tracking-tight">
            Negam 
            <span className="text-brand-accent"> Care</span>
          </h1>
      
        </div>
      </div>
    </section>
  )
}

export default AboutHero
