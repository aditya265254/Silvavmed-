import React from "react";
import { contact_Info, social_Icons } from "@/constants";

const Topbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-7.5 sm:flex sm:justify-between  ">
      <div className="flex gap-1 flex justify-evenly">
        {contact_Info.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <img className={item.iconClass} src={item.icon} alt="icon" />
            <span className={item.textClass}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center sm:gap-2 justify-center mt-5 gap-5">
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
      </div>
    </div>
  );
};

export default Topbar;
