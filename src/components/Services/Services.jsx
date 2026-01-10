import React from 'react'
import ServicesHero from './ServicesHero'
import ServicesHeroText from './ServicesHeroText'
import ServiceBody from './ServiceBody'
import ServiceBodyTwo from './ServiceBodyTwo'
import ServiceContact from './ServiceContact'
import Industry from './Industry/Industry'

const Services = () => {
  return (
    <div>
      <ServicesHero/>
      <ServicesHeroText/>
      <ServiceBodyTwo/>
      <Industry/>
      <ServiceContact/>
    </div>
  )
}

export default Services
