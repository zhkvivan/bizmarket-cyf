import React from "react";
import "./Hero.css";
import HeroImage from "../images/heroimg.jpg";



const Hero = () => {
  return (
		<div
			style={{
				backgroundImage: `url("${HeroImage}")`,
				backgroundSize: "cover",
			}}
			className="hero"
		>
			<div className="content">
				<h1> Take your business online.</h1>
				<p className="search-text">
					Post your ads. Find new buyers. Buy from 10 pieces.{" "}
				</p>
				<a href="/login">
					<button type="button">Create Your Store</button>
				</a>
			</div>
		</div>
	);
};

export default Hero;
