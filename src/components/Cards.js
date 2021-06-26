import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
	return (
		<div className="cards">
			<h1>Check this out</h1>
			<div className="cards-container">
				<div className="cards-wrapper">
					<ul className="cards-items">
						<CardItem></CardItem>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
