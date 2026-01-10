import React from 'react'
import HomeHero from './HomeHero'
import Industry from "../Services/Industry/Industry"
import Commitment from '../About/Commitment/Commitment'
import HomeAbout from './HomeAbout'
import WhyUs from '../About/IndustryRecognition/WhyUs'
import HomeServices from './HomeServices'
import ServiceContact from '../Services/ServiceContact'
import ContactBody from "../Contact/ContactBody"
import ResidentialProjects from './ResidentialProjects/ResidentialProjects'
import AchievementCounter from './AchievemntCounter/AchievementCounter'
import Client from './Client/Client'
const Home = () => {
  return (
    <>
    <div className='overflow-x-hidden'>
      <HomeHero/>
      <HomeServices/>
      <HomeAbout/>
      {/* <ResidentialProjects/> */}
      <AchievementCounter/>

        <Client/>
      
      
      
      </div>
      <ContactBody/>
    </>
  )
}

export default Home
