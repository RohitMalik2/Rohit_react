import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Max2', age: 29 },
      { name: 'mAX3', age: 30 }
    ],
    otherState: 'some other state',
    showPersons: false
  }
/* 
  switchNameHandler = (newName) => {
    // Don't do this: this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: newName, age: 35 },
        { name: 'Max2', age: 29 },
        { name: 'mAX3', age: 30 }
      ],
      otherState: 'some other state'
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Yash', age: 13 },
        { name: event.target.value, age: 13 },
        { name: 'Yash', age: 13 }
      ]
    })
  } */

  deletePersonHandler =(index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const currentState = this.state.showPersons;
    this.setState({ showPersons: !currentState });
  }
  render() {
    const style = {
      fontSize: '14px',
      backgroundColor: 'White',
      border: '1px soild blue',
      padding: '8px'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* iterating through a list of items */}
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} click={this.deletePersonHandler(index)} age={person.age} />;
          })}

          {/*  <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, iam react App!!</h1>
        <p>This is really working!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>toggle persons</button>
        {persons}
      </div>
    );
  };

}

export default App;
