import React from 'react'
import { buttons, navLinks, silvavmedLogo } from '@/constants'
import Abutton from '../common/Abutton'
const Mainnav = () => {
  return (
    <div className=' max-w-7xl mx-auto flex justify-center sm:justify-between mt-6.5 items-center'>
      <div>
        <img className='w-64 h-20.1 ' src={silvavmedLogo.img} alt="logo" />
      </div>
      <div className='flex items-center justify-center gap-8'>
      <div className='hidden lg:flex gap-8 font-medium text-lg text-[#1F1F1F]'>
        {navLinks.map((item, index) => (
          <a className='hover:text-[#14967F] transition duration-300 ease-in-out hover:scale-110' key={item.id} href={item.href}>{item.label}</a>
        ))}
      </div>
      <div className='hidden sm:block'>
        <Abutton  label={buttons.bookAppointment.lable}
        icon={buttons.bookAppointment.icon}
        />
      </div>
      </div>
    </div>
  )
}

export default Mainnav