import React, { Component } from 'react';
import './App.css';
import Card from '../components/Cards/Card';
import ResultBox from '../components/ResultBox/ResultBox'
import Trash from '../components/Trash/Trash'

class App extends Component {
    state={
            waste: '',
            weight: '',
            location:''
          };

  onWasteChange= (event) => {
    this.setState({waste: event.target.value});
  }

  onWeightChange= (event) => {
    this.setState({weight: event.target.value});
  }

  render() {
    return (
      <div className='App'>
         <Trash />
         <Card onWaste={this.onWasteChange} onWeight={this.onWeightChange} />
         <ResultBox waste={this.state.waste} weight={this.state.weight} />
      </div>
    );
  }
}

export default App;
