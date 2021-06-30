import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards">
			<h1>Abu Bakr Masjid</h1>
			<div className="cards-container">
				<div className="cards-wrapper">
					<ul className="cards-items">
						<CardItem
							src="images/quran-window.jpg"
							text="Explore the hidden waterfall deep inside the Amazon Jungle"
							label="Adventure"
							path="/services"
						/>
						<CardItem src="images/masjid-night.jpg" text="Travel through the Islands of Bali in a Private Cruise" label="Luxury" path="/project" />
					</ul>
					<ul className="cards-items">
						<CardItem
							src="images/street-prayer.jpg"
							text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
							label="Mystery"
							path="/services"
						/>
						<CardItem src="images/quran-dates.jpg" text="Experience Football on Top of the Himilayan Mountains" label="Adventure" path="/project" />
						<CardItem src="images/charity.jpg" text="Ride through the Sahara Desert on a guided camel tour" label="Adrenaline" path="/donate" />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
