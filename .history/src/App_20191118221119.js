import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Max2', age: 29 },
      { NAME: 'mAX3', age: 30 }
    ],
    otherState: 'some other state'
  }

  switchNameHandler = (newName) => {
    // Don't do this: this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: newName, age: 35 },
        { name: 'Max2', age: 29 },
        { NAME: 'mAX3', age: 30 }
      ]
    });
  }

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        { name: 'Yash', age: 13 },
        { name: event.target.value, age: 13 },
        { name: 'Yash', age: 13 }
      ]
    })
  }


  render() {
    const style = {
      fontSize: '14px',
      backgroundColor: 'White',
      border: '1px soild blue',
      padding: '8px'
    };
    
    return (
      <div className="App">
      </div>
    );
  };

}

export default App;
