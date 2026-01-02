import React from 'react'
import Hero from '../components/HomeSection/Hero.jsx'
import ContactStrip from '../components/ContactStrip'
import WhoWeAre from '../components/HomeSection/WhoWeAre.jsx.jsx'
import ServicesGrid from '../components/HomeSection/ServicesGrid.jsx'
import WhyNegam from '../components/HomeSection/WhyNegam.jsx'
import PartnerCTA from '../components/HomeSection/PartnerCTA.jsx'

export const Home = () => {
  return (
    <main className="bg-white text-brand-dark">
      <Hero />
      <WhoWeAre />
      <ServicesGrid />
      <WhyNegam />
      <PartnerCTA />
      <ContactStrip />
    </main>
  )
}
