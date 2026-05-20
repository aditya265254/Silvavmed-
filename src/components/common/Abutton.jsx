import React from 'react'
import { Link } from 'react-router'

const Abutton = ({label, icon, to}) => {
  return (
    <Link to={to}>

    <button className='w-65.5 h-16.25 rounded-full border-2 border-[#DCEAF0] shadow-sm flex items-center justify-between text-[#1F1F1F] hover:bg-gray-100 transition duration-300 ease-in-out'>
        <span className='ml-4 font-medium text-[16px] uppercase hover:scale-75 transition duration-300 ease-in-out cursor-pointer'>
        {label}
        </span>
        <span className='w-13.75 h-13.75 rounded-full bg-[#14967F] flex items-center justify-center mr-1 cursor-pointer'>
            <img className='w-[25.43px] h-[19.07px] hover:scale-110 transition duration-300 ease-in-out' src={icon} alt="icon" />
        </span>
    </button>
    </Link>
  )
}

export default Abutton