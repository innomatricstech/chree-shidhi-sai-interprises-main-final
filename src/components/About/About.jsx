import React from 'react';
import { FaHardHat, FaProjectDiagram, FaUsers, FaRocket, FaHandshake, FaShieldAlt, FaMedal, FaTrophy } from 'react-icons/fa';

import AboutHero from './AboutHero';
import AboutText from './AboutText';
import aboutImg from "../../assets/aboutImg.webp"
import aboutImg2 from "../../assets/aboutImg2.jpg"
import WhyUs from './IndustryRecognition/WhyUs';
import Commitment from './Commitment/Commitment';
import AboutBody from './AboutBody';
const About = () => {
  return (
    <>
    <AboutHero/>
    <AboutText/>
    <AboutBody/>
    </>
  );
};

export default About;