import React, { useEffect } from "react";
import appoinmentdoctor from "../assets/images/appointment/appointment-doctor-img.svg"
import AppointmentForm from "@/components/form.jsx/AppointmentForm";

const Appointment = () => {


  useEffect(() => {
  window.scrollTo(0, 0)
}, [])


  return (
    <div>
         {/* ─── MAIN ─── */}
      <main>
        {/* Hero Banner */}
        <section>
          <div className="w-full bg-[#14967F] mt-5 p-12 mb-1">
            <h1 className="lg:h-29.25 lg:w-195.5 flex items-center font-bold md:text-[42px] text-3xl leading-13 font-[Montserrat] text-[#CEDF89]">
              Book Your Appointments Today
            </h1>
          </div>
        </section>

        {/* ─── FORM SECTION ─── */}
        <section className="flex items-center justify-evenly flex-col lg:flex-row md:ml-4">
          <AppointmentForm/>
          {/* Doctor Image */}
          <div className="lg:max-w-186 lg:max-h-239.5 lg:-mt-14">
            <img src={appoinmentdoctor} alt="appointment-doctor" />
          </div>
        </section>  
      </main>
    </div>
  );
};

export default Appointment;