import React from "react";
import { about_img } from "../../assets";
import Heading from "../../components/Heading";
import NewsLetter from "../../components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Heading text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={about_img}
          alt="about image"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
            distinctio vel reiciendis obcaecati libero illo eum similique
            praesentium ipsum error?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
            distinctio vel reiciendis obcaecati libero illo eum similique
            praesentium ipsum error?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et
            eius nulla aut, similique quibusdam ipsa repellendus ullam
            consectetur saepe.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Heading text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, iusto
            rerum minus possimus quidem nihil!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience Assurance: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, iusto
            rerum minus possimus quidem nihil!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, iusto
            rerum minus possimus quidem nihil!
          </p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default About;
