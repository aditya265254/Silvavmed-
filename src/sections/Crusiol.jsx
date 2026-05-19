import React, { useState, useEffect } from 'react';
import img1 from '../assets/images/crousel/notfall-img.svg'
import img2 from '../assets/images/crousel/naturheil-img.svg'
import img3 from '../assets/images/crousel/Rectangle 31.svg'
import img4 from '../assets/images/crousel/asthertische-img.svg'
import img5 from '../assets/images/crousel/akupunktur-img.svg'
import img6 from '../assets/images/crousel/allgemein-img.svg'
import img7 from '../assets/images/crousel/besondere-img.svg'
import img8 from '../assets/images/crousel/notfall-cedizin-img.svg'

const Crusiol = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  // Slide data
  const slides = [
    {
      id: 1,
      cards: [
        {
          img: img1,
          title: "Notfallmedizin für",
          description: "Neben der Behandlung von Sportverletzungen widmen wir uns mit Ihnen der Bedeutung der körperlichen Aktivität für Gesundheit und Leistungsfähigkeit.",
          link: "#"
        },
        {
          img: img2,
          title: "Naturheil verfahren",
          description: "Während die herkömmliche Medizin Symptome bekämpft, konzentrieren sich Naturheilverfahren darauf, die Selbstheilungskräfte zu aktivieren, um auf diese ganzheitliche Weise Heilung zu bringen.",
          link: "#"
        },
        {
          img: img3,
          title: "Homöo pathie",
          description: "Der wichtigste Grundsatz der Homöopathie lautet: Genau abgestimmt auf die zu behandelnde Person soll Ähnliches mit Ähnlichem geheilt werden.",
          link: "#"
        }
      ]
    },
    {
      id: 2,
      cards: [
        {
          img: img4,
          title: "Schmerztherapie",
          description: "Chronische Schmerzen beeinträchtigen die Lebensqualität erheblich. Wir bieten individuelle Therapiekonzepte zur nachhaltigen Schmerzreduktion.",
          link: "#"
        },
        {
          img: img5,
          title: "Immuntherapie",
          description: "Das Immunsystem gezielt stärken und regulieren – mit modernen Methoden helfen wir Ihrem Körper, sich selbst zu schützen und zu heilen.",
          link: "#"
        },
        {
          img: img6,
          title: "Vitamintherapie",
          description: "Gezielte Vitaminzufuhr zur Stärkung des Körpers und zur Vorbeugung von Mangelerscheinungen bei Vitaminen und Mineralstoffen.",
          link: "#"
        }
      ]
    },
    {
      id: 3,
      cards: [
        {
          img: img7,
          title: "Burnouttherapie",
          description: "Burnout frühzeitig erkennen und behandeln – wir begleiten Sie auf dem Weg zurück zu mehr Energie und Lebensfreude.",
          link: "#"
        },
        {
          img: img8,
          title: "Hormontherapie",
          description: "Hormonelle Dysbalancen ausgleichen und die Lebensqualität nachhaltig verbessern – individuell auf Sie abgestimmt.",
          link: "#"
        },
        {
          img: img6,
          title: "Allergiebehandlung",
          description: "Allergien gezielt diagnostizieren und langfristig behandeln für ein beschwerdefreies und gesundes Leben.",
          link: "#"
        }
      ]
    }
  ];

  return (
    <section className="pt-10 pb-10 m-2 lg:m-0">
      {/* Section Header */}
      <div className="section-head  mx-auto px-4 mb-12">
        <h2 className=" font-normal font-montserrat text-center  text-[42px] text-[#333] mb-4">
          Unser <span className="text-[#14967F] font-bold">Fachbereiche</span>
        </h2>
        
        <p className="font-normal text-[16px] text-gray-600 leading-relaxed  text-center ">
          Als Einzelpraxis in Landshut und mit dem Medizinisches Versorgungszentrum in Vilsbiburg decken wir mit unserem erfahrenen Ärzteteam 
          ein breites Spektrum <br className='hidden lg:block' /> medizinischer Fachbereiche ab. Sprechen Sie uns jederzeit gern an, wenn Sie Fragen haben.
        </p>
        </div>
      

      {/* Carousel Container */}
      <div className="carousel relative max-w-7xl mx-auto px-4 overflow-hidden">
        {/* Slides Outer */}
        <div className="slides-outer overflow-hidden">
          <div 
            className="slides-inner flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="slide flex-shrink-0 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                  {slide.cards.map((card, index) => (
                    <div key={index} className="card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={card.img} 
                        alt={card.title} 
                        className="w-108.5 h-99.25 object-cover"
                      />
                      <div className="card-body p-6">
                        <h3 className="font-montserrat font-bold text-xl text-[#14967F] mb-3">
                          {card.title}
                        </h3>
                        <p className="font-montserrat text-gray-600 text-sm leading-relaxed mb-4">
                          {card.description}
                        </p>
                        <a 
                          href={card.link} 
                          className="font-montserrat text-[#14967F] font-semibold hover:text-[#CEDF89] transition-colors inline-flex items-center gap-2"
                        >
                          Mehr lesen →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="dots flex justify-center gap-3 mt-8">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index 
                  ? 'bg-[#14967F] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crusiol;