import React from 'react'
import { Helmet } from "react-helmet-async";

 
import ServiceBodyTwo from './ServiceBodyTwo'
import ServiceContact from './ServiceContact'
import Industry from './Industry/Industry'

const Services = () => {
  return (
    <div>

      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>
          Demolition & Excavation Services Bengaluru | SSSE Contractors
        </title>

        <meta
          name="description"
          content="Building demolition, debris disposal, excavation, scrap handling & soil supply services in Bengaluru. BBMP authorized contractor for C&D waste removal."
        />

        <meta
          name="keywords"
          content="
building demolition contractors Bengaluru,
demolition services Bangalore,
concrete structure demolition,
RCC demolition contractors,
building dismantling services,
industrial demolition Karnataka,
shed dismantling contractors,
interior demolition services,
fit out removal contractors,
interior strip out works Bengaluru,
construction debris removal Bengaluru,
C&D waste disposal Bangalore,
BBMP debris disposal contractor,
authorized dumping yard transport,
demolition waste transport services,
construction waste clearance,
earth excavation contractors Bengaluru,
hard rock excavation services,
JCB excavation works Bangalore,
site excavation contractors,
scrap disposal contractors,
demolition scrap handling,
soil supply Bengaluru,
good quality filling soil suppliers,
debris and scrap removal services,
demolition contractor in Bengaluru,
demolition services in Karnataka,
building demolition near me,
Bangalore demolition company,
C&D waste removal Bangalore
"
        />
      </Helmet>

    
      <ServiceBodyTwo/>
      <Industry/>
      <ServiceContact/>

    </div>
  )
}

export default Services
