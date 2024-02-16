import React, { useEffect } from "react";
import demoDay from "../assets/demoDay.png";
import workTeam from "../assets/Workteam.png";
import projetComp from "../assets/ProjectCompe.png";
import demoCar from "../assets/demoCar.png";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutCard = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="p-10">
        <div
          data-aos="fade-left"
          data-aos-delay="50"
          className="w-full h-72 grid md:grid-cols-4">
          <div className="bg-green-500 w-96 mx-5 transparent rounded-xl text-white items-center hover:scale-105 hover:shadow-xl transition-all">
            <img src={demoDay} alt="" />
            <div className="p-3">
              <p className="font-bold">Demo day at Sand Box</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi corrupti expedita officiis reiciendis? Corporis
                doloribus ab aliquid?
              </p>
            </div>
          </div>
          <div className="bg-red-500 w-96 mx-5 transparent rounded-xl text-white items-center hover:scale-105 hover:shadow-xl transition-all">
            <img src={workTeam} alt="" />
            <div className="p-3">
              <p  className="font-bold">Presentation Demo at Sand Box</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi corrupti expedita officiis reiciendis? Corporis
                doloribus ab aliquid?
              </p>
            </div>
          </div>
          <div className="bg-cyan-500 w-96 mx-5 transparent rounded-xl text-white items-center hover:scale-105 hover:shadow-xl transition-all">
            <img src={projetComp} alt="" />
            <div className="p-3">
              <p className="font-bold">Demo Project Competition</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi corrupti expedita officiis reiciendis? Corporis
                doloribus ab aliquid?
              </p>
            </div>
          </div>
          <div className="bg-orange-400 w-96 mx-5 transparent rounded-xl text-white items-center hover:scale-105 hover:shadow-xl transition-all">
            <img src={demoCar} alt="" />
            <div className="p-3">
              <p className="font-bold">Demo Car Automatic Driving with Ai</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi corrupti expedita officiis reiciendis? Corporis
                doloribus ab aliquid?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
