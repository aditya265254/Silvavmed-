import React from 'react'
import { buttons, navLinks, silvavmedLogo } from '@/constants'
import Abutton from '../common/Abutton'
const Mainnav = () => {
  return (
    <div className=' max-w-screen-xl mx-auto flex justify-center sm:justify-between mt-6.5 items-center'>
      <div>
        <img className='w-64 h-20.1 ' src={silvavmedLogo.img} alt="logo" />
      </div>
      <div className='flex items-center justify-center gap-8'>
      <div className='flex gap-8 font-medium text-lg text-[#1F1F1F]'>
        {navLinks.map((item, index) => (
          <a key={item.id} href={item.href}>{item.label}</a>
        ))}
      </div>
      <div>
        <Abutton label={buttons.bookAppointment.lable}
        icon={buttons.bookAppointment.icon}
        />
      </div>
      </div>
    </div>
  )
}

export default Mainnav