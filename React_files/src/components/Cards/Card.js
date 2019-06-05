import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="tc pa2 ma1 bw2 shadow-5 trash-dump-card">
        <input
          className="pa2 w-20 waste-name"
          value={this.props.waste}
          type="text"
          placeholder="Name of the Waste"
          onChange={this.props.onWaste}
        />
        <input
          className="pa2 w-20 weight-in-kg"
          value={this.props.weight}
          type="number"
          placeholder="Weight number in kg"
          onChange={this.props.onWeight}
        />

        <button
          className={
            this.props.waste && this.props.weight ? 'submit-button' : 'submit-button-deactivated'
          }
          // Send onClick event to parent
          onClick={this.props.handleClick}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Card;
