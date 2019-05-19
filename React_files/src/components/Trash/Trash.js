import React from 'react';
import Aux from 'react-aux';
import '../../containers/App.css'
const Trash =(props) =>{
    return (
      <header className="App-header">
        <div>
          <h1 className="app-title"><i class="fas fa-trash-alt trash-icon"></i>Recycling Tracker<i class="fas fa-recycle"></i></h1>
        </div>

      </header>
    );
}
export default Trash;
