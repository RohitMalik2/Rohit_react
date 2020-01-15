import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

 const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Yash', age: 3 },
      { name: 'Yug', age: 3 }
    ],
    unChanged: 'other value'
  });

 const changeNameHandler = () => {
    console.log('name changed');
    this.setState({
     persons: [
        { name: 'Joravar', age: 3 },
        { name: 'Yug', age: 3 }
      ]
    });
  }

  return (
    <div className="App">
      <h3>
        To get started, edit <code>src/App.js</code> and save to reload.
        </h3>
      <p> It is HTML but at the end it is JS</p>
      <button onClick={changeNameHandler}>Change Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} other={personsState.unChanged} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name="Malik" age="10">Hey its' children..</Person>
    </div>
  );
  /* return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hey whts..up")); */
}

export default app;

/* state = {
  persons: [
    { name: 'Yash', age: 3 },
    { name: 'Yug', age: 3 }
  ],
  unChanged: 'other value'
}

changeNameHandler = () => {
  console.log('name changed');
  this.setState({
   persons: [
      { name: 'Joravar', age: 3 },
      { name: 'Yug', age: 3 }
    ]
  });
} */