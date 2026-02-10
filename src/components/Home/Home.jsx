import React from 'react'
import { Helmet } from "react-helmet-async";

import HomeHero from './HomeHero'
import HomeAbout from './HomeAbout'
import HomeServices from './HomeServices'
import ContactBody from "../Contact/ContactBody"
import AchievementCounter from './AchievemntCounter/AchievementCounter'
import Client from './Client/Client'

const Home = () => {
  return (
    <>
      {/* ✅ SEO TITLE + META */}
      <Helmet>
        <title>
          Building Demolition Services in Bengaluru | BBMP Authorized Debris Disposal Contractor
        </title>

        <meta
          name="description"
          content="Professional building demolition, dismantling & debris disposal contractor in Bengaluru. BBMP authorized transport, excavation, scrap & soil supply services."
        />
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
