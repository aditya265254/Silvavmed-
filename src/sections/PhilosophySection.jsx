import React from 'react';
import wartezIcon from '../assets/images/philoshphi/wartez-icon.svg';
import terminvergabeIcon from '../assets/images/philoshphi/terminvergabe-icon.svg';
import fachkrIcon from '../assets/images/philoshphi/fachkr-icon.svg';
import zielfuhrendeIcon from '../assets/images/philoshphi/zielfuhreende-icon.svg';
import philosImg from '../assets/images/philoshphi/philosh-img.svg';

const PhilosophySection = () => {
  const features = [
    {
      icon: wartezIcon,
      title: "Kurze",
      highlight: "Wartezeiten",
      description: "Wir lassen Sie nicht lange warten."
    },
    {
      icon: terminvergabeIcon,
      title: "Erfahrene",
      highlight: "Ärzte",
      description: "Profitieren Sie von unserer Erfahrung."
    },
    {
      icon: fachkrIcon,
      title: "Kompetente",
      highlight: "Fachkräfte",
      description: "Ein zuverlässiges Team für Ihre Gesundheit."
    },
    {
      icon: zielfuhrendeIcon,
      title: "Zielführende",
      highlight: "Behandlung",
      description: "Wir finden den richtigen Weg für Sie."
    },
    {
      icon: terminvergabeIcon,
      title: "Schnelle",
      highlight: "Terminvergabe",
      description: "Wir kümmern uns um Ihren Termin."
    }
  ];

  return (
    <section className="mb-[101px]">
      {/* Header */}
      <div className="lg:ml-32 pb-[49px] text-center lg:text-left px-4 lg:px-0">
        <h1 className="font-montserrat font-normal text-[42px] leading-10 lg:mb-[37px] lg:mt-[87px] mt-8 mb-4">
          Unsere <span className="font-bold text-[#14967F]">Philosophie</span>
        </h1>
        <p className="font-normal text-[16px] lg:max-w-[852px] text-[#616161] mx-auto lg:mx-0 ">
          Das Wohlergehen und die Gesundheit unserer Patienten steht für uns an erster Stelle. 
          Dafür stehen wir Ihnen mit unserer Erfahrung zur Seite. In unserer Einzelpraxis sind 
          wir auch an Samstagen und Feiertagen für Sie da.
        </p>
      </div>

      {/* Features Grid */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly px-4 lg:px-0">
        {/* Left Side - Features */}
        <div className="w-full lg:w-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="lg:w-[666px] w-full lg:h-[100px] bg-[#F3F8E0] flex rounded-full items-center justify-start mb-[20px] p-2"
            >
              <div className="bg-[#14967F] sm:h-[87px] sm:w-[87px] h-16 w-16 rounded-full flex items-center justify-center flex-shrink-0">
                <img className="sm:h-[47px] sm:w-[50px] " src={feature.icon} alt={feature.title} />
              </div>
              <div className="ml-6">
                <h1 className="font-montserrat font-normal text-[22px]">
                  {feature.title} <span className="font-bold text-[#14967F]">{feature.highlight}</span>
                </h1>
                <p className="font-normal text-[18px] text-[#616161]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="max-h-[604px] max-w-[434px] lg:ml-16 mt-8 lg:mt-0">
          <img src={philosImg} alt="Philosophie" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;