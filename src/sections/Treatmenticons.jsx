import React from "react";
import card1 from "../assets/images/treatmentIcons/kryolipolyse-icon.svg";
import card2 from "../assets/images/treatmentIcons/krebs-icon.svg";
import card3 from "../assets/images/treatmentIcons/licht-icon.svg";
import card4 from "../assets/images/treatmentIcons/burnout-icon.svg";
import card5 from "../assets/images/treatmentIcons/immunotherapy-icon.svg";
import card6 from "../assets/images/treatmentIcons/vitamin-icon.svg";
import card7 from "../assets/images/treatmentIcons/borrreliose-icon.svg";
import card8 from "../assets/images/treatmentIcons/schmerz-icon.svg";
import card9 from "../assets/images/treatmentIcons/hormone-icon.svg";
import card10 from "../assets/images/treatmentIcons/eigenblut-icon.svg";
import card11 from "../assets/images/treatmentIcons/allergy-icon.svg";

const Treatmenticons = () => {
  const treatments = [
    {
      img: card1,
      des: "Kryolipolyse",
    },
    {
      img: card2,
      des: "Krebstherapie",
    },
    {
      img: card3,
      des: "Lichttherapie",
    },
    {
      img: card4,
      des: "Burnouttherapie",
    },
    {
      img: card5,
      des: "Immuntherapie",
    },
    {
      img: card6,
      des: "Vitamintherapie",
    },
    {
      img: card7,
      des: "Borreliose Therapie",
    },
    {
      img: card8,
      des: "Schmerztherapie",
    },
    {
      img: card9,
      des: "Hormontherapie",
    },
    {
      img: card10,
      des: "Eigenbluttherapie",
    },
    {
      img: card11,
      des: "Allergiebehandlung",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto mb-15">
      <h2 className="font-[Montserrat] font-normal text-4xl text-center lg:text-left lg:text-4xl  lg:mt-10">
        Unsere vielseitigen <br />
        <span className="text-[#14967F] font-bold">Behandlungen</span>
      </h2>
      <p className="mt-5 text-[#616161] font-normal text-base text-center lg:text-left lg:h-16.25 lg:w-213 ">
        Klassische Schulmedizin oder ein komplementärmedizinischer Ansatz?
        Gemeinsam mit Ihnen finden wir zusammen die für Sie zielführende
        Behandlung, um Ihre Gesundheit dauerhaft zu erhalten oder zu verbessern.
      </p>
      <div className="flex flex-wrap gap-16 justify-center mt-10">
      {treatments.map((item, index) => {
          return (
              <div className="flex flex-col items-center justify-between mt-5 gap-2">
            <div className="w-37 h-37 flex items-center justify-center rounded-xl shadow cursor-pointer hover:border-2 hover:border-[#14967F] ">
              <img className="hover:scale-125 transition duration-300 h-18.75 w-18.75" key={index} src={item.img} alt="img" />
            </div>
            <p>{item.des}</p>
          </div>
        );
    })}
    </div>
    </section>
  );
};

export default Treatmenticons;
