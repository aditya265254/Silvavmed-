import React, { useState } from "react";  
import addlogo from '../assets/images/helthcare/new-order-icon.svg'
import sublogo from '../assets/images/helthcare/Rectangle 24.svg'

const VorteilAccordion = ({ title, children, titleColor = "text-[#ffff]", defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);  // ✅ Ab sahi kaam karega

  return (
    <div className="mt-6 lg:w-[550px] w-full bg-[#748690] rounded-sm overflow-hidden">
      {/* Button Header */}
      <button
        className="w-full font-semibold flex items-center justify-between pl-4 py-4 focus:outline-none hover:bg-[#5f757e] transition-colors cursor-pointer font-montserrat"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${titleColor} text-xl font-semibold text-left`}>
          {title}
        </span>
        
        <span className="h-14 w-14 bg-[#CEDF89] flex items-center justify-center flex-shrink-0 ml-4">
          <img 
            src={isOpen ? sublogo : addlogo}  // ✅ Note: sublogo = close, addlogo = open
            alt={isOpen ? "close" : "open"}
            className="w-6 h-6"
          />
        </span>
      </button>
      
      {/* Content */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 pt-2 pb-4">
          <p className="font-normal text-sm text-[#ffffff] leading-relaxed">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VorteilAccordion