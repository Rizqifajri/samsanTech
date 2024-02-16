import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";
import Logo from "../assets/logosamsan.png";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(
    "bg-gradient-to-b from-cyan-400 via-cyan-200 to-transparent"
  );

  const handleScroll = () => {
    const scrollPosition = window.scrollY

    if(scrollPosition < 400 ){
      setNavBackground('bg-gradient-to-b from-cyan-400 via cyan-200 to-transparent ')

    }else if (scrollPosition >= 400 && scrollPosition < 1200) {
      setNavBackground('bg-gradient-to-b from-orange-400 via-orange-200 to-transparent')

    }else{
      setNavBackground('bg-gradient-to-b from-gray-400 via-gray-200 to-transparent')
    }
  }


  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className={`fixed w-full z-50 transition-all ${navBackground} `}>
        <ul className="flex-row flex items-center gap-24 p-7 text-sm mx-auto">
          <img className="w-[70px] h-[50px]" src={Logo} alt="" />
          <div className="flex flex-row gap-40 font-bold">
            <li className="hover:underline hover:text-green-500 transition-all">
              <Link
                className="cursor-pointer"
                to="home"
                smooth={true}
                onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to="about" smooth={true}>
                About
              </Link>
            </li>   
            <li>
              <Link className="cursor-pointer" to="contact" smooth={true}>
                Our Team
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to="project" smooth={true}>
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
