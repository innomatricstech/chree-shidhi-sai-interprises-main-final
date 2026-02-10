import React from 'react'
import HomeHero from './HomeHero'
 
 
import HomeAbout from './HomeAbout' 
import HomeServices from './HomeServices'
 
import ContactBody from "../Contact/ContactBody"
 
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
