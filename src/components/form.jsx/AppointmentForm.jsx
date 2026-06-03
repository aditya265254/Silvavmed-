import React from 'react'
import { useForm } from "react-hook-form";

const AppointmentForm = () => {
          const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const onSubmit = (data) => {
    console.log("Appointment Data:", data);
    alert("Appointment booked successfully!");
    reset();
  };
  return (

    <div>
         <form  onSubmit={handleSubmit(onSubmit)} noValidate>


            {/* Full Name */}
            <div className="mb-9 mt-10">
              <label htmlFor="fullName" className="font-medium text-[16px] leading-10.75">
                Your Full Name
              </label>
              <br />
              <input
                type="text"
                id="fullName"
                placeholder="John Doe"
                className={`h-17.5 lg:w-137.5 md:w-137.5 w-full rounded-[5px] bg-[#FAFAFA] border-2 px-3 ${
                  errors.fullName ? "border-red-500" : "border-[#D4D4D4]"
                }`}
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: { value: 3, message: "Minimum 3 characters required" },
                })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-9">
              <label htmlFor="email" className="font-medium text-[16px] leading-10.75">
                Email Address
              </label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className={`h-[70px] lg:w-[550px] md:w-[550px] w-full rounded-[5px] bg-[#FAFAFA] border-[2px] px-3 ${
                  errors.email ? "border-red-500" : "border-[#D4D4D4]"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="mb-9">
              <label htmlFor="phoneNo" className="font-medium text-[16px] leading-[43px]">
                Phone Number
              </label>
              <br />
              <input
                type="tel"
                id="phoneNo"
                placeholder="+49 000 000 000"
                className={`h-[70px] lg:w-[550px] md:w-[550px] w-full rounded-[5px] bg-[#FAFAFA] border-[2px] px-3 ${
                  errors.phoneNo ? "border-red-500" : "border-[#D4D4D4]"
                }`}
                {...register("phoneNo", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9+\s\-()]{7,15}$/,
                    message: "Enter a valid phone number",
                  },
                })}
              />
              {errors.phoneNo && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNo.message}</p>
              )}
            </div>

            {/* Date & Time */}
            <div className="flex gap-6 mb-5">
              <div>
                <label htmlFor="appointmentDate" className="font-medium text-[16px] leading-[43px]">
                  Appointment Date
                </label>
                <br />
                <input
                  type="date"
                  id="appointmentDate"
                  className={`h-[70px] lg:w-[262px] md:w-[262px] w-full rounded-[5px] bg-[#FAFAFA] border-[2px] px-3 ${
                    errors.appointmentDate ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  {...register("appointmentDate", { required: "Date is required" })}
                />
                {errors.appointmentDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.appointmentDate.message}</p>
                )}
              </div>

              <div className="mb-9">
                <label htmlFor="appointmentTime" className="font-medium text-[16px] leading-[43px]">
                  Appointment Time
                </label>
                <br />
                <input
                  type="time"
                  id="appointmentTime"
                  className={`h-[70px] lg:w-[262px] md:w-[262px] w-full rounded-[5px] bg-[#FAFAFA] border-[2px] px-3 ${
                    errors.appointmentTime ? "border-red-500" : "border-[#D4D4D4]"
                  }`}
                  {...register("appointmentTime", { required: "Time is required" })}
                />
                {errors.appointmentTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.appointmentTime.message}</p>
                )}
              </div>
            </div>

            {/* Appointment Type */}
            <div className="mb-9">
              <label htmlFor="appointmentType" className="font-medium text-[16px] leading-10.75">
                Appointment Type
              </label>
              <br />
              <select
                id="appointmentType"
                className={`h-17.5 lg:w-137.5 md:w-137.5 w-full rounded-[5px] bg-[#FAFAFA] border-2 px-3 ${
                  errors.appointmentType ? "border-red-500" : "border-[#D4D4D4]"
                }`}
                {...register("appointmentType", { required: "Please select an appointment type" })}
              >
                <option value="">Select Type</option>
                <option value="Notfallmedizin">Notfallmedizin für</option>
                <option value="Naturheilverfahren">Naturheil verfahren</option>
                <option value="Homöopathie">Homöo pathie</option>
                <option value="ÄsthetischeMedizin">Ästhetische Medizin</option>
              </select>
              {errors.appointmentType && (
                <p className="text-red-500 text-sm mt-1">{errors.appointmentType.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="h-17.5 lg:w-137.5 md:w-137.5 w-full bg-[#14967F] flex items-center justify-center rounded-[5px] cursor-pointer hover:bg-[#117a67] transition duration-300">
              <button
                type="submit"
                className="text-white font-medium text-[22px]"
              >
                Book Appointment
              </button>
            </div>
          </form >
    </div>
  )
}

export default AppointmentForm