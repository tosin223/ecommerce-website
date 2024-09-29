import React from "react";
import logo2 from "../assets/logo2.png"

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 texxt-sm">
      <div>
        <img src={logo2} alt="logo" className="mb-5 w-32 cursor-pointer" />
        <p className="w-full sm:w-2/3 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde odit ut
          voluptatibus consectetur commodi obcaecati ipsum rem id! Iste
          voluptatum quas harum, ipsam illo dolorum.
        </p>
      </div>

      <div>
        <p className="text=xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <p className="text=xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+234 9074491632</li>
          <li>tosin@gmail.com</li>
        </ul>
      </div>
      <div>
        {/* <hr className="w-full"/> */}
        <p className="py-5 text-sm text-center">copyright 2024 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
