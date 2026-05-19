import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Appointment from './Appointment'
import Footer from '@/components/footer/Footer'
import Treatmenticons from '@/sections/Treatmenticons'
import HeroSection from '@/sections/Heros'
import Description from '@/sections/Description'
import LandshutSection from '@/sections/LandshutSection'
import HealthcareSection from '@/sections/HealthcareSection'
import Crusiol from '@/sections/Crusiol'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Treatmenticons/>
        <Description/>
        <LandshutSection/>
        <HealthcareSection/>
        <Crusiol/>
        <Footer/>
        
    </div>
  )
}

export default Home