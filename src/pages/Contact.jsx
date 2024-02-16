import React from "react";
import OurTeam from "../components/OurTeam";
import Background from "../assets/background.jpg";

const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto", 
    backgroundOpacity: '50%',
  };

  return (
    <>
      <div data-aos="fade-up" id="contact" style={backgroundStyle}>
        <OurTeam />
      </div>
    </>
  );
};

export default Contact;
