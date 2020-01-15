import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
   /*  return (
      <div className="App">       
        <h3>
          To get started, edit <code>src/App.js</code> and save to reload.
        </h3>
      </div>
    ); */
    return React.createElement('div', null, React.createElement('h1', null, "Hey whts..up"));
  }
}

export default App;
