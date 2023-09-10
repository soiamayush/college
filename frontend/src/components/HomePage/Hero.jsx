import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom"
import herobg from "../../assets/images/herobg.jpg"
import herovideo from "../../assets/video/hero.mp4"

const Hero = () => {

  return (
    <div className="herohero herobg" >

<div className="hero-uu " >
      {/* <video
        autoPlay
        loop
        muted
        className="background-video"
        style={{marginTop : "50px"}}
      >
        <source src={herovideo} type="video/mp4" />
        Add additional source elements for different video formats
      </video> */}
      <div className="hero-content" >
        {/* Add your hero content here */}
      </div>
    </div>

    <section className="showcase " >
      <div className="overlay" ></div>
      <div className="texty">
        <h2 className="stroke-text">Elevate Your Style,</h2> 
        <h3 className="stroke-text">One Thread at a Time</h3>
        <p >Explore our carefully chosen collection of high-quality fabrics that can spark your creativity and enhance your sense of fashion.</p>
        <Link to="/shop">Explore</Link>
      </div>
    </section>
    </div>
  );
};

export default Hero;
