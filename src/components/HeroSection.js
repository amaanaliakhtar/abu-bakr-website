import React from "react";
import "../App.css";
import { Button } from "./Button.js";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video src="/videos/video-1.mp4" autoPlay loop muted></video>
			<h1>Prayer Times</h1>
			<p>لا تنسى ذكر الله</p>
			<div className="hero-btns">
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
					GET STARTED
				</Button>
				<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
					DONATE
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
