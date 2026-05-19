import React from 'react'
import logo from '../../assets/images/common/brand-logo.svg'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
    const icons = [
        {
            icon: FaTwitter,
          
        },
        {
            icon: FaFacebookF,

        },
        {
            icon: FaInstagram,
     
        },
        {
            icon: FaLinkedinIn
        },

        
    ]
  return (

    <footer className="w-full bg-[#F3F8E0] pb-5">
      
      <div className="flex items-center justify-center flex-col pt-20 gap-5 pb-3">
        <div className="h-full w-[320px] flex items-center justify-center">
          <img src={logo} alt="brand-logo" />
        </div>
        <div className=" h-[66px] flex flex-col gap-2.5 items-center justify-center">
          <h1 className='text-2xl font-cormorant tracking-[20%] font-normal text-[#575860]'>FOLLOW US</h1>
          <div className='flex items-center justify-center gap-1'>
            {icons.map((item, index) => {
                const Icon = item.icon
                return (
                    <>
                    <a href="#" key={index}><Icon className='h-5.25 w-5.25 text-[#575860]'/></a>
                     {index < icons.length -1 && (
                         <span className='h-px w-5.75 bg-[#C4C4C4]'></span>
                     )}
                    </>
                )
            })}
         
          </div>
          

        </div>
      </div>

      <div className="bg-[#14967F] mt-10 flex justify-evenly lg:h-[76px] items-center">
        <p className="font-normal text-xl text-white">
          © Copyright 2025 <span className="underline">silvamed.de</span>
        </p>
        <p className='font-normal font-cormorant  text-xl text-white underline'>
          Impressum | Datenschut
        </p>
      </div>

    </footer>
  )
}

export default Footer