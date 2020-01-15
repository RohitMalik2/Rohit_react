import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">       
        <h3>
          To get started, edit <code>src/App.js</code> and save to reload.
        </h3>
        <p> It is HTML but at the end it is JS</p>
        <Person name="Malik1" age="14"/>
        <Person name="Malik2" age="12"/>
        <Person name="Malik" age="10"/>
      </div>
    );
    /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hey whts..up")); */
  }
}

export default App;
