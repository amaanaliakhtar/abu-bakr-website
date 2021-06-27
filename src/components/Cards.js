import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
	return (
		<div className="cards">
			<h1>Check out these epic destinations</h1>
			<div className="cards-container">
				<div className="cards-wrapper">
					<ul className="cards-items">
						<CardItem src="images/img-9.jpg" text="Explore what we provide" label="Services" path="/services"></CardItem>
						<CardItem src="images/img-2.jpg" text="Donate to the project" label="Donate" path="/project"></CardItem>
					</ul>
					<ul className="cards-items">
						<CardItem src="images/img-3.jpg" text="Explore what we provide" label="Services" path="/services"></CardItem>
						<CardItem src="images/img-4.jpg" text="Donate to the project" label="Donate" path="/project"></CardItem>
						<CardItem src="images/img-8.jpg" text="Donate to the project" label="Donate" path="/project"></CardItem>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
