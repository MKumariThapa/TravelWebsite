import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./HeroSection.module.css";

const HeroSection = (props) => {
  return (
    <>
      {/* <div className={styles.container}> */}
      <div
        className={styles.container}
        // data-aos="fade-up"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        data-aos="zoom-in"
        data-aos-duration="2500"
        data-aos-delay="1000"

        // data-aos-offset="200"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <img src={props.imgSrc} className={styles.ContainerImg} />

        <div className={styles.centered}>
          <h1 className="text-wrap ">{props.heading1}</h1>
          <p>{props.pText}</p>
          {/* <a>Travel Plan</a> */}
          {/* <button>Travel Plan</button> */}
          <Button variant="success">{props.buttonText}</Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
