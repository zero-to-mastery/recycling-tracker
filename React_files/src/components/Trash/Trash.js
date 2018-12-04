import React from 'react';
import Aux from 'react-aux';
import '../../containers/App.css'
const Trash =(props) =>{
    return (
        <Aux>
            <header className="App-header">
            <section>
                <span className="trash">
                <span></span>
                    <i></i>
                </span>
            </section>
            <h1 className="f1 App-title">Welcome to Recycling Tracker.Lets Make The World Green</h1>
            </header>
        </Aux>
    );
}
export default Trash;