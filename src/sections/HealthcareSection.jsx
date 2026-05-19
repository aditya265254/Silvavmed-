import React from 'react';
import VorteilAccordion from './VorteilAccordion';  // ✅ Import karna bhoolna mat
import arrow from '../assets/images/common/btn-arrow.svg'
import award from '../assets/images/helthcare/awards-1.svg'

const HealthcareSection = () => {
  return (
    <section className="bg-[#647883] flex items-center justify-center flex-col lg:items-start lg:justify-evenly lg:flex-row lg:pt-10 pb-10 px-4">
      {/* Left Content */}
      <div className="max-w-[647px] pt-10">
        <p className="font-normal text-3xl leading-9 text-[#FFFFFF] font-montserrat">
          2 Standorte für Ihre Gesundheit! <br />
          <span className="text-[#CEDF89] font-bold">Ihr MVZ Silvamed in Landshut</span>
        </p>
        <p className="font-bold text-3xl leading-10 text-[#CEDF89] pt-5 uppercase font-montserrat">
          und Vilsbiburg
        </p>
        <p className="font-normal lg:text-[14px] text-[#FFFFFF] max-w-[645px] leading-[24px] pt-5">
          Nach über 28 Jahren Erfahrung in unserer Hausarztpraxis in Adlkofen ist unsere Praxis 2006 in das City-Center Landshut umgezogen. 
          Seit 2016 profitiert auch der Raum Vilsbiburg, Gangkofen und Geisenhausen von unserem neuen MVZ in Vilsbiburg.
          <br /><br />
          „Licht, Ruhe, Klarheit und freier Blick auf Positives“ – nach diesem Motto wurden unsere Privatpraxis sowie die Versorgungszentren 
          eingerichtet, um Ihnen Ihre Wartezeit so angenehm wie möglich zu gestalten. Sollten Sie doch einmal etwas länger warten müssen, 
          können Sie Ihre Wartezeit mit Shoppen im CCL, Bummeln in der Innenstadt oder Spazierengehen in der wunderschönen Umgebung überbrücken.
        </p>
        <br />

        <h2 className="font-bold text-[20px] text-[#ffff] pt-5 font-montserrat">
          Bewerten Sie jetzt Hausarztpraxis
        </h2>
        <br />

        {/* Rating Card */}
        <div className="lg:max-w-[558px] lg:h-[82px] bg-[#CEDF89] flex items-center justify-between rounded-full">
          <h1 className="font-bold text-[20px] pl-7 font-montserrat">
            Dr. Med. univ. Wlen Dost Mohammad<br />
            <span className="text-[#14967F] font-semibold text-[16px] font-montserrat">
              Landshut in Jameda
            </span>
          </h1>
          <span className="h-[70px] w-[70px] bg-[#14967F] flex items-center justify-center rounded-full mr-1 cursor-pointer">
            <img src={arrow} alt="arrow" />
          </span>
        </div>

        {/* Awards Image */}
        <div className="mt-12 h-[110px] w-[220px]">
          <img src={award} alt="awards" />
        </div>
      </div>

      {/* Right Content - Vorteile */}
      <div className="pt-7 w-full lg:w-auto">
        <h1 className="h-9 max-w-[553px] font-normal text-[42px] leading-10 text-white font-montserrat">
          Unsere <span className="font-bold text-[#CEDF89]">Vorteile</span>
        </h1>

        <VorteilAccordion 
          title="An 5 Tagen der Woche geöffnet"
          titleColor="text-[#CEDF89]"
          defaultOpen={true}
        >
          In unserer Einzelpraxis in Landshut stehen wir Ihnen an 5 Tagen in der Woche zur Verfügung. 
          Im Medizinischen Versorgungszentrum Vilsbiburg bieten wir Ihnen arbeitnehmerfreundliche Sprechzeiten an.
        </VorteilAccordion>

        <VorteilAccordion title="Kein Praxisurlaub">
          Unsere Praxis bleibt das ganze Jahr über geöffnet. Wir nehmen keinen Praxisurlaub, damit Sie jederzeit medizinische Versorgung erhalten. 
          Auch in den Ferienzeiten sind wir für Sie da.
        </VorteilAccordion>

        <VorteilAccordion title="Kostenlose Parkmöglichkeiten">
          Profitieren Sie von unseren kostenlosen Parkplätzen direkt vor der Praxis. In Landshut stehen Ihnen ausreichend Parkplätze im 
          City-Center zur Verfügung. In Vilsbiburg finden Sie ebenfalls kostenfreie Parkmöglichkeiten in unmittelbarer Nähe.
        </VorteilAccordion>

        <VorteilAccordion title="Öffentliche Erreichbarkeit">
          Beide Standorte sind hervorragend an den öffentlichen Nahverkehr angebunden. Bus- und Bahnverbindungen bringen Sie bequem zu uns. 
          Die Haltestellen befinden sich in unmittelbarer Nähe zu unseren Praxen.
        </VorteilAccordion>
      </div>
    </section>
  );
};

export default HealthcareSection;