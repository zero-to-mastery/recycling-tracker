import React, { Component } from "react";
import "./App.css";
import Card from "../components/Cards/Card";
import ResultBox from "../components/ResultBox/ResultBox";
import Trash from "../components/Trash/Trash";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			waste: "",
			weight: "",
			location: "",
			renderResults: false
		};
	}

	onWasteChange = event => {
		this.setState({ waste: event.target.value, renderResults: false });
	};

	onWeightChange = event => {
		this.setState({ weight: event.target.value, renderResults: false });
	};

	handleClick = () => {
		if (this.state.waste && this.state.weight) {
			this.setState({ renderResults: true });
		}
	};

	render() {
		return (
			<div className="App">
				<Trash />
				<Card
					onWaste={this.onWasteChange}
					onWeight={this.onWeightChange}
					waste={this.state.waste}
					weight={this.state.weight}
					// Bring submit button onclick event to parent
					handleClick={this.handleClick.bind(this)}
				/>
				{/* CONDITIONALLY RENDER RESULTS */}
				{this.state.renderResults ? (
					<ResultBox waste={this.state.waste} weight={this.state.weight} />
				) : null}
			</div>
		);
	}
}

export default App;
