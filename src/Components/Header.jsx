import React from 'react'
import groupProfiles from '../assets/48137.jpg'
import arowIcon from '../assets/arow-icon.png'
import headerImage from '../assets/1000001338.jpg'
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-blue-600 rounded-lg px-6 md:px-10 lg:px-20">
      {/* -----Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          {/* group profiles here */}
          <img className="w-12 rounded-full " src={groupProfiles} alt="" />
          <p>
            Simply browse through our extensive list or trusted doctors,
            <br /> schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white py-2 px-4 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300" 
        >
          Book appointment <img className="w-5" src={arowIcon} alt="" />
        </a>
      </div>
      {/* right side */}
      <div className="md:w-1/2 relative">
        <img
          className="h-auto w-full md:absolute bottom-0 h-auto rounded-lg"
          src={headerImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header
