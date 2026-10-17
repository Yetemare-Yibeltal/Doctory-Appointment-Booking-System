import React from "react";
import microscope from "../assets/microscope.jpg";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm">
        {/* Left section */}
        <div>
          <img className="w-10 rounded-full border-1 p-1" src={microscope} alt="" />
          <p className="w-full  md:w-2/3 text-gray-600">
            if the troubler want to gain our service they can access our service
            through online plateform in appointment , by filling the requirements.
          </p>
        </div>
        {/* Center section */}
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul>
            <li>+2519- 22 34 56 67</li>
            <li>selam25@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright text section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center
        ">Copyright 2025@ adidas - All rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
