import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">       
        <h3>
          To get started, edit <code>src/App.js</code> and save to reload.
        </h3>
        <p> It is HTML but at the end it is JS</p>
      </div>
      <p> It is HTML but at the end it is JS</p>
    );
    /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hey whts..up")); */
  }
}

export default App;
