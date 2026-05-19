import React from "react";
import { contact_Info, social_Icons } from "@/constants";
import { FaAlignJustify } from "react-icons/fa6";

const Topbar = () => {
  return (
    <div className="max-w-7xl mx-auto mt-7.5 sm:flex sm:justify-between  ">
      <div className="flex gap-6  justify-evenly">
        {contact_Info.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <img className={item.iconClass} src={item.icon} alt="icon" />
            <span className={item.textClass}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center sm:gap-4 sm:justify-center justify-between ml-2">
        {social_Icons.map((item, index) => (
          <div
            key={index}
           className='h-10 w-10 flex justify-center items-center rounded-full border border-gray-200/60 shadow-sm '
          >
            <a className="h-4.75 w-4.75 " href={item.path}>
              <img src={item.icon} alt="icon" />
            </a>
          </div>
        ))}
        <div className="lg:hidden">
          <FaAlignJustify size={22}/>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
