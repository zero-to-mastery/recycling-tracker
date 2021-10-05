import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Card from "../components/Cards/Card";
import ResultBox from "../components/ResultBox/ResultBox";
import Trash from "../components/Trash/Trash";

const App = () =>  {
	const [waste,setWaste] = useState({
		type:"",
		weight: 0,
		location: ""
	});
	const [isRender,setRender] = useState(false);
	const recycling =['plastic', 'pet', 'hdpe', 'ldpe', 'pp', 'metal', 'tin', 'aluminium', 'steel', 'cardboard', 'paper', 'glass']


	const onWasteTypeChange = event => {
		let wasteType = event.target.value.toLowerCase();
		setWaste({
			...waste,
			type:wasteType
		});
		
	};

	const onWasteWeightChange = event => {
		setWaste({
			...waste,
			weight:event.target.value
		});
		
		setRender(false);		
	};

	const handleClick = () => {
		if (waste.type && waste.weight) {
			setRender(!isRender)
		}
	};

	
		return (
			<div className="App">
				<Trash />
				<Card
					onWasteTypeChange={onWasteTypeChange}
					onWasteWeightChange={onWasteWeightChange}
					waste={waste}					
					// Bring submit button onclick event to parent
					handleClick={handleClick}
				/>
				{/* CONDITIONALLY RENDER RESULTS */}
				{isRender && (
					<ResultBox type={waste.type} weight={waste.weight} recycling={recycling} />
				)}
			</div>
		);
	
}

export default App;
