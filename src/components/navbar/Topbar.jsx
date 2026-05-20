import React from "react";
import { contact_Info, social_Icons } from "@/constants";
import { FaAlignJustify } from "react-icons/fa6";

const Topbar = ({ onMenuToggle, menuOpen }) => {
  return (
    <div className="w-full bg-white  border-gray-100">
      <div className="max-w-7xl mx-auto mt-7.5 flex justify-between items-center ">
        {/* Contact Info - Left Side */}
        <div className="flex gap-4 sm:gap-6">
          {contact_Info.map((item, index) => (
            <div key={index} className="flex items-center md:gap-1.5">
              <img className={item.iconClass} src={item.icon} alt="icon" />
              <span className={item.textClass}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Right Side - Social Icons + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Social Icons - hide on mobile, show on lg */}
          <div className="hidden lg:flex items-center gap-4">
            {social_Icons.map((item, index) => (
              <div
                key={index}
                className="flex h-10 w-10 justify-center items-center rounded-full border border-gray-200/60 shadow-sm"
              >
                <a className="h-4.75 w-4.75" href={item.path}>
                  <img
                    src={item.icon}
                    alt="icon"
                    className="hover:scale-125 transition duration-300"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Hamburger Button - Always visible on mobile, hidden on lg */}
          <button
            className="lg:hidden flex items-center justify-center p-2"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            <FaAlignJustify size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;