import React from 'react'
import { Helmet } from "react-helmet"
import HomeHero from './HomeHero'
import HomeAbout from './HomeAbout' 
import HomeServices from './HomeServices'
import ContactBody from "../Contact/ContactBody"
import AchievementCounter from './AchievemntCounter/AchievementCounter'
import Client from './Client/Client'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Demolition Contractors in Bengaluru | Building Demolition Services Bangalore</title>

        <meta 
          name="description" 
          content="Leading demolition contractors in Bengaluru offering building demolition, RCC demolition, interior strip out works, C&D waste disposal, excavation services, scrap handling and debris removal across Bangalore and Karnataka." 
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

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Company Name" />
      </Helmet>

      <div className='overflow-x-hidden'>
        <HomeHero/>
        <HomeServices/>
        <HomeAbout/>
        <AchievementCounter/>
        <Client/>
      </div>

      <ContactBody/>
    </>
  )
}

export default Home
