import React, { useEffect } from "react";
import Image from "../assets/samsanTech.png";
import demoDay from "../assets/demoDay.png";
import AboutCard from "../components/AboutCard";
import Aos from "aos";
import OurTeam from "../components/OurTeam";

const About = () => {
  useEffect(()=>{
    Aos.init({
      once: true,
    })
  }, [])
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
        id="about"
        className="flex flex-row justify-between gap-24 mb-10">
        <img className="mt-56" src={Image} alt="" />
        <div className="items-center mt-80  text-center  ">
          <h1 className="text-5xl mb-5">Samsan Tech.</h1>
          <p className="text-2xl text-justify p-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            quidem dolore laudantium sed, excepturi repellendus vero magni
            ducimus temporibus quasi, iusto veritatis earum minima numquam
            officiis eius nihil facere rem?
          </p>
        </div>
      </div>
      <AboutCard  />
      
    </>
  );
};

export default About;
