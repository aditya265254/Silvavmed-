import React from 'react'
import doctorImg from '../assets/images/hero/dr-dost-img.svg'
import expVector from '../assets/images/hero/exp-vector.svg'
import Abutton from '@/components/common/Abutton'
import arrow from '../assets/images/common/btn-arrow.svg'
import { buttons } from '@/constants'




const HeroSection = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row lg:justify-around lg:gap-10 max-w-7xl mx-auto ">
      
      {/* Left - Text Content */}
      <div className="flex items-center justify-center flex-col gap-3 pt-5 sm:gap-5 pb-6 lg:gap-4 lg:items-start lg:pt-0">
        
        <h2 className="w-80 h-11 bg-[#CEDF89] text-sm flex items-center justify-center rounded-full sm:w-[27.5rem] font-[Montserrat] font-bold sm:text-xl">
          Dr. Med. univ. Wlen Dost Mohammad
        </h2>

        <h3 className="font-[Montserrat] font-bold text-2xl sm:text-5xl text-center lg:text-left lg:leading-[100%] lg:pt-[20px]">
          Fühlen Besser <br />
          über Finden <br />
          <span className="text-[#14967F] font-[Montserrat]">Gesundheitswesen</span>
        </h3>

        <p className="text-[#616161] text-center font-normal text-base sm:w-[548px] h-[65px] lg:text-left">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
        </p>

     <Abutton  label={buttons.bookAppointment.lable}
        icon={buttons.bookAppointment.icon}
        to= '/appointment'
        />

      </div>

      {/* Right - Doctor Image */}
      <div className="flex items-center justify-center pt-9 lg:pt-28 hover:scale-90 transition duration-300 ease-in-out cursor-pointer">
        <div className="relative">
          <img src={doctorImg} alt="doctorimg" className="h-64 sm:h-[400px] lg:h-[566px]" />
          <div className="absolute top-[-3rem] left-[-2rem] sm:left-[-4rem] lg:top-[-6rem] lg:left-[-6rem]">
            <img
              src={expVector}
              alt="experience"
              className="rounded-full h-28 w-28 sm:h-[150px] sm:w-[150px] lg:w-[192px] lg:h-[192px] hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection