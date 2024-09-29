import React from "react";
import Heading from "../../components/Heading";
import NewsLetter from "../../components/NewsLetter";
import { contact_img } from "../../assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Heading text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-8 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={contact_img}
          alt="contact image"
          className="w-full max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6 ">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            10, Ogunnaike Street <b>Lagos State</b>
          </p>
          <p className="text-gray-500">
            Tel: +234 907449632 <br /> Emai: tosin@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and opening
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Contact;
