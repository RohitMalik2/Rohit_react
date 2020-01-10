import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium';
import ErrorBoundary from './ErrorBoundary/ErrorBoundaryComponent';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '11', name: 'Max2', age: 29 },
      { id: '12', name: 'mAX3', age: 30 }
    ],
    otherState: 'some other state',
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const currentState = this.state.showPersons;
    this.setState({ showPersons: !currentState });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return id === person.id;
    });
    const changedPerson = { ...this.state.persons[personIndex] }; // deep copy or Object.assign({}, this.state.persons[personIndex])
    changedPerson.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = changedPerson;
    this.setState({
      persons: persons
    });
  }
  render() {
    const style = {
      fontSize: '14px',
      backgroundColor: 'green',
      color: '#ffffff',
      border: '1px soild blue',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* iterating through a list of items */}
          {this.state.persons.map((person, index) => {
            return <ErrorBoundaryComponent key={person.id}><Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} /></ErrorBoundaryComponent>;
          })
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    // Adding classes dynamically
    const classes = [];
    if (this.state.persons.length <= 3) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, iam react App!!</h1>
          <p className={classes.join(' ')}>This is really working!!</p>
          <button style={style} onClick={this.togglePersonsHandler}>toggle persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  };

}

export default Radium(App);
