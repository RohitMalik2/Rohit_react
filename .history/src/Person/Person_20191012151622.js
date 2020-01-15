import React from 'react'; // We need to import react bcz below JSX is converted
// to React element by React only

const person = (props) => {
    return <p>I am {props.name}  and i am {props.age} yrs old!!</p>;
}
export default person;