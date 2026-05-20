import React, { useState } from 'react'
import { buttons, navLinks, silvavmedLogo } from '@/constants'
import Abutton from '../common/Abutton'
import Topbar from './Topbar'
import { Link } from 'react-router'

const Mainnav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Topbar
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
      />

     <div >
      <div className="max-w-7xl mx-auto flex justify-between items-center  mt-6.5 px-4">
        <div className='hidden sm:flex'>
          <img className="w-64 h-20.1 " src={silvavmedLogo.img} alt="logo" />
        </div>
        
       
        <div className="flex items-center justify-between gap-8">
          <div className="hidden lg:flex gap-8 font-medium text-lg text-[#1F1F1F]">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                className="hover:text-[#14967F] transition duration-300 ease-in-out hover:scale-110"
                to={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden sm:block ">
            <Abutton
              label={buttons.bookAppointment.lable}
              icon={buttons.bookAppointment.icon}
              to="/appointment"
            />
          </div>
        </div>
        </div>
        {/* Mobile placeholder - to maintain justify-between on mobile */}
        <div className="lg:hidden w-8"></div>
      </div>

     
      {menuOpen && (
        <div className="lg:hidden absolute top-25 left-0 w-full bg-white shadow-md z-50 border-t border-gray-100">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="block px-6 py-3 text-[#1F1F1F] font-medium hover:text-[#14967F] hover:bg-gray-50 border-b border-gray-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
         
         
        </div>
      )}
    </>
  )
}

export default Mainnav