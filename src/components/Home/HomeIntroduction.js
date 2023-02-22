import React from "react";
import styles from "./HomeIntroduction.module.css";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Packages from "./pacakages/Packages";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import RecenTrips from "./recenttrips/RecenTrips";
import Footer from "../footer/Footer";
import imageOne from "../../assets/21.png";
import HeroSection from "./herosection/HeroSection";
// import CoverImage from "../../assets/new.jpg";
// import imageOne from "../../12.jpg";
// import imageOne from "../../assets/13.jpg";

const HomeIntroduction = () => {
  return (
    <>
      {/* <div>
        <img 
        src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      </div> */}
      {/* <main
        className="d-flex jusitfy-content-center flex-column pt-5 w-100"
        style={{ backgroundColor: "#F9FEFF" }}
      >
        <Button variant="" className="text-center">
          Exceptional Photos everytime
        </Button>
        <h1 className={styles.texth1}>Your Journey Starts Here</h1>
        <h6 className={styles.texth1}>Choose your Favourite Destination</h6>
        <Button variant="" className="button">
          Travel Plan
        </Button>
      </main> */}

      {/* <div className={styles.container}>
        <img src={imageOne} className={styles.ContainerImg} />

        <div className={styles.centered}>
          <h1 className="text-wrap ">Your Journey Starts Here</h1>
          <p>Choose your Favoirite Destination</p>
          <Button variant="success">Travel Plan</Button>
        </div>
      </div> */}
      <HeroSection
        cnContainer="styles.container"
        imgSrc={imageOne}
        imgStyles="styles.ContainerImg"
        heading1="Your Journey Starts Here"
        pText="Choose your Favoirite Destination"
        buttonText="Travel Plan"
      />

      <div className={styles.mainContainer} />
      <div
        data-aos="fade-up"
        data-aos-delay="1200"
        data-aos-duration="2500"
        className="my-5   text-center"
        // style={{ backgroundColor: "#F9FEFF" }}
      >
        <h2>EXCITING TOURS FOR ADVENTUROUS PEOPLE</h2>
        {/* <h1>Popular Destination</h1> */}
        <p>You can discover unique Destinations using Google Maps.</p>
      </div>
      <Packages />
      <RecenTrips />
      {/* <h3 className={styles.texth1}>
        Get Expert photographers and amazing photos, <br></br>
        starting from just IDR, 1,480,000 in 500 + cities worldwide.
      </h3> */}

      <div data-aos="fade-up" data-aos-duration="3200">
        <Carousel className={styles.carouselMain} indicators={false}>
          <Carousel.Item interval={1000} className={styles.carouselContainer}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500} className={styles.carouselContainer}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlb3BsZSUyMHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className={styles.carouselContainer}>
            <img
              className="d-block w-100"
              // src="https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHBlb3BsZSUyMHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHBlb3BsZSUyMHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <Footer
        data-aos="fade-up"
        data-aos-duration="3400"
        data-aos-easing="ease-in-out"
      />
      <div />
    </>
  );
};

export default HomeIntroduction;
