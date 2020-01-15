import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'Yash', age: 3},
      {name: 'Yug', age: 3}
    ]
  }
  render() {
    return (
      <div className="App">       
        <h3>
          To get started, edit <code>src/App.js</code> and save to reload.
        </h3>
        <p> It is HTML but at the end it is JS</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name="Malik" age="10">Hey its' children..</Person>
      </div>
    );
    /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hey whts..up")); */
  }
}

export default App;
