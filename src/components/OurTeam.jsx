import React from "react";
import Ceo from "../assets/Dalmi.png";
import Cto from "../assets/Dosan.png";
import EngineerAi from "../assets/Ai.png";
import EngineerWeb from "../assets/ML.png";
import Designer from "../assets/Design.png";

const OurTeam = () => {
  return (
    <>
      <h1 className="text-center text-4xl mb-10 mt-56">Our Team</h1>
      <div className="flex flex-col justify-center items-center gap-10 font-bold">
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-center backdrop-blur w-60 shadow-md rounded-md h-80 itesm">
          <img className="flex mx-auto mt-5 w-52" src={Ceo} alt="" />
          <p className="">CEO at Samsan-Tech</p>
          <p>SEO DAL MI</p>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-center  backdrop-blur w-60 shadow-md rounded-md h-80 itesm">
          <img className="flex mx-auto mt-5 w-52" src={Cto} alt="" />
          <p className="">CTO at Samsan-Tech</p>
          <p>NAM DOSAN</p>
        </div>
        <div data-aos="fade-right" className="grid grid-cols-3 gap-10">
          <div className="flex flex-col justify-center items-center  backdrop-blur shadow-md w-60 rounded-md h-80 itesm">
            <img className="flex mx-auto mt-5 w-52" src={EngineerAi} alt="" />
            <p className="">Ai Engineer at Samsan-Tech</p>
            <p>LEE CHUL SAN</p>
          </div>
          <div className="flex flex-col justify-center items-center backdrop-blur w-60 shadow-md rounded-md h-80 itesm">
            <img className="flex mx-auto mt-5 w-52" src={EngineerWeb} alt="" />
            <p className="">Web Engineer at Samsan-Tech</p>
            <p>KIM YONG SAN</p>
          </div>
          <div className="flex flex-col justify-center items-center backdrop-blur w-60 shadow-md rounded-md h-80 itesm">
            <img className="flex mx-auto mt-5 w-52" src={Designer} alt="" />
            <p className="">Designers at Samsan-Tech</p>
            <p>JUNG SA HA</p>
          </div>
        </div>

        {/* <div className='bg-black'>
            <img src={Cto} alt="" />
        </div>
        <div className='bg-black'>
            <img src={EngineerAi} alt="" />
        </div>
        <div className='bg-black'>
            <img src={EngineerWeb} alt="" />
        </div>
        <div className='bg-black'>
            <img src={Designer} alt="" />
        </div> */}
      </div>
    </>
  );
};

export default OurTeam;
