import React from "react";
import HeroSection from "../Home/herosection/HeroSection";
import imageOne from "../../assets/13.jpg";

// const imageOne =
//   "https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHx0cmF2ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
const AboutComp = () => {
  return (
    <>
      <HeroSection
        imgSrc={imageOne}
        heading1="Follow to the Unknown"
        pText="Choose your Favoirite Destination"
        buttonText="Book Now "
      />
    </>
  );
};

export default AboutComp;
