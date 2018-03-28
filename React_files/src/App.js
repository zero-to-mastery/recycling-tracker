import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import ResultBox from './resultBox.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section>
             <span className="trash">
               <span></span>
                <i></i>
             </span>
          </section>
          <h1 className="f1 App-title">Welcome to Recycling Tracker</h1>
        </header>
         <Card/>
         <ResultBox />
      </div>
    );
  }
}

export default App;
