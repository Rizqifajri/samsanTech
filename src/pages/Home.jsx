import React from "react";
import LogoHome from '../assets/logoHome.png'
import '../../src/App.css'

const Home = () => {
  return (
    <>
      <div
        data-aos="zoom-out"
        data-aos-delay="50"
        className="flex flex-row justify-between ">
        <div className="typewriter flex flex-col p-10 mt-56">
          <h1 className="text-xl">Welcome to, </h1>
          <h1 className=" text-[96px]">Samsan-Tech.</h1>
          <div className="flex flex-row gap-10">
            <p className="">Ai StartUp</p>
            <span>|</span>
            <p>IT StartUp </p>
            <span>|</span>
            <p>IT Consultant</p>
          </div>
        </div>
        <img className="mt-24" src={LogoHome} alt="" />
      </div>
    </>
  );
};

export default Home;
