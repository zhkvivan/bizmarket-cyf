import React from "react";
import "./Hero.scss";


const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1> Take your business online.</h1>
        <p className="search-text">
          Post your ads. Find new buyers. Buy from 10 pieces.{" "}
        </p>
        <a href="/login">
          <button type="button">Create Your Store</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
