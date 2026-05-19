import React from 'react';
import btnArrow from '../assets/images/common/btn-arrow.svg';
import handImg from '../assets/images/team/team-sec-bg.svg'

const TeamSection = () => {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${handImg})` }}
    >
      <div className="py-16 md:py-20">
        <h1 className="text-white text-3xl md:text-4xl lg:text-[42px] font-normal mb-6 font-montserrat ">
          Unsere <span className="text-[#CEDF89] font-bold">Ärzteteam</span>
        </h1>
        
        <p className="text-white text-base md:text-lg lg:text-[20px] font-light max-w-5xl mx-auto leading-relaxed">
          Unser Team aus angestellten, erfahrenen und kompetenten Ärzten sowie unser zuverlässiges, 
          professionelles medizinisches Fachpersonal steht Ihnen gern jederzeit hilfsbereit mit Rat und Tat zur Seite.
        </p>
        
        <button className="flex items-center justify-between bg-white rounded-full w-[200px] mx-auto mt-8 hover:shadow-lg transition-all group">
          <span className="pl-5 text-gray-800 font-medium text-sm md:text-base">Mehr lesen</span>
          <span className="bg-[#14967F] rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center m-1 group-hover:bg-[#0e6b5a] transition-colors">
            <img src={btnArrow} alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default TeamSection;