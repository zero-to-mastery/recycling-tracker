import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section>
             <span class="trash">
               <span></span>
                <i></i>
             </span>
          </section>
          <h1 className="f1 App-title">Welcome to Recycling Tracker</h1>
        </header>
         <Card/>
      </div>
    );
  }
}

export default App;
