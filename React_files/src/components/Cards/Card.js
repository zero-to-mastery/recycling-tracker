import React, { Component } from "react";
import "./Card.css";

const Card = ({onWasteTypeChange,onWasteWeightChange,handleClick,waste}) => {	
		return (
			<div className="tc pa2 ma1 bw2 shadow-5 trash-dump-card">
				<input
					className="pa2 w-20 waste-name"
					value={waste.type}
					type="text"
					placeholder="Name of the Waste"
					onChange={onWasteTypeChange}
				/>
				<input
					className="pa2 w-20 weight-in-kg"
					value={waste.weight}
					type="number"
					placeholder="Weight number in kg"
					onChange={onWasteWeightChange}
				/>

				<button
					className={
						waste.type && waste.weight
							? "submit-button"
							: "submit-button-deactivated"
					}
					// Send onClick event to parent
					onClick={handleClick}
				>
					Submit
				</button>
			</div>
		);
	}


export default Card;
