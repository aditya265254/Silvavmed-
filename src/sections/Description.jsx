import Abutton from '@/components/common/Abutton'
import React from 'react'
import icon from '../assets/icons/location/btn-location-icon.svg'

const Description = () => {
  return (
    <section className="bg-[#14967F] mt-28 flex flex-col items-center justify-center px-4">
      
      <h1 className="font-normal text-[42px] pt-16 pb-12 text-white text-center ">
        Unsere{' '}
        <span className="text-[#CEDF89] font-bold font-[Montserrat]">Standorte</span>
      </h1>

      <p className="font-light text-[20px] text-white text-center leading-8 lg:max-h-[129px] lg:max-w-[898px]">
        An den Standorten in unserer Einzelpraxis Landshut und in unserem
        Medizinisches Versorgungszentrum Vilsbiburg finden Sie kompetente
        hausärztliche Versorgung. Bequeme Anfahrtswege und Parkmöglichkeiten
        innerhalb optimaler Infrastruktur machen den Besuch beim Allgemeinarzt
        für Sie leichter. Modernes Praxisambiente, neueste Technikstandards
        und fachkompetentes Personal sind für uns eine Selbstverständlichkeit.
      </p>

      <div className="mt-24 mb-16 bg-white rounded-full">
        <Abutton
          label="LANDSHUT"
          icon={icon}
          
        />
      </div>

    </section>
  )
}


export default Description