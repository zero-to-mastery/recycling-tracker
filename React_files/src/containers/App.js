import React, { Component } from 'react';
import './App.css';
import Card from '../components/Cards/Card';
import ResultBox from '../components/ResultBox/ResultBox'


class App extends Component {

  constructor(){
    super();
    this.state={
           waste: '',
           weight: '',
        };
  }

  onWasteChange= (event) => {
    this.setState({waste: event.target.value});
  }

  onWeightChange= (event) => {
    this.setState({weight: event.target.value});
  }

  render() {
    return (
      <div className='App'>
        <header className="App-header">
          <section>
             <span className="trash">
               <span></span>
                <i></i>
             </span>
          </section>
          <h1 className="f1 App-title">Welcome to Recycling Tracker</h1>
        </header>
         <Card onWaste={this.onWasteChange} onWeight={this.onWeightChange} />
         <ResultBox waste={this.state.waste} weight={this.state.weight} />
      </div>
    );
  }
}

export default App;
