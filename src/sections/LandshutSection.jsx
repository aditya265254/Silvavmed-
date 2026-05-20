import React from 'react'
import cloudImg from '../assets/images/locations/cloud.svg'
import landshutImg from '../assets/images/locations/landshut-img.svg'
import timeIcon from '../assets/images/locations/time-icon.svg'

const contactInfo = [
  { label: 'Tel:-', value: '0871 . 430 747 – 0', href: 'tel:0871.430747–0' },
  { label: 'Handy:-', value: '0176 / 747 322 89', href: 'tel:017674732289' },
  { label: 'Fax:-', value: '0871 . 430 747 – 20', href: 'tel:0871.430747–20' },
  { label: 'E-Mail:-', value: 'info@drdost.de', href: 'mailto:info@drdost.de' },
]

const LandshutSection = () => {
  return (
    <section
      className="flex lg:justify-between lg:items-center lg:flex-row flex-col px-4"
      style={{ backgroundImage: `url(${cloudImg})` }}
    >
      {/* Left - Text Content */}
      <div className="flex justify-center flex-col lg:w-[50%] lg:pl-40 items-center text-center lg:text-left lg:items-start">
        
        <h3 className="font-normal sm:text-[42px] text-3xl lg:leading-[50px] leading-10 font-[Montserrat]">
          Unser Standort in <br />
          <span className="font-bold text-[#14967F]">Landshut</span>
        </h3>

        <p className="font-normal text-base text-[#616161] pt-2">
          Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.
        </p>

        <h4 className="mt-10 font-normal text-2xl leading-9">
          Am Alten Viehmarkt 5 <br /> 84028 Landshut
        </h4>

        {/* Contact List */}
        <ul className="mt-5 font-bold text-[18px] list-none">
          {contactInfo.map((item, index) => (
            <li key={index} className="mt-3">
              <span className="text-[#14967F]">{item.label} </span>
              <a className="font-normal" href={item.href}>{item.value}</a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 mt-6 items-center">
          <img className="h-[31px] w-[31px]" src={timeIcon} alt="timeicon" />
          <span className="text-[#14967F] font-normal text-2xl">Sprechzeiten:</span>
        </div>

        <h5 className="font-normal text-lg mt-5">Mon – Fr. nach Vereinbarung</h5>
      </div>

      {/* Right - Image */}
      <div className="flex items-center justify-center">
        <img className="object-cover pt-16" src={landshutImg} alt="landshut" />
      </div>

    </section>
  )
}

export default LandshutSection