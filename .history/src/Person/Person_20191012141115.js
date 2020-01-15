import React from 'react'; // We need to import react bcz below JSX is converted
// to React element by React only

const person = () => {
    return <p>I am a Person and i am {Math.floor(Math.random(0.5 * 28))} yrs old!!</p>;
}
export default person;