import React from 'react'; // We need to import react bcz below JSX is converted
// to React element by React only
import './Person.css';

const person = (props) => {
    return (
       <div className='Person'>
       <p onClick={props.click}>I am {props.name}  and i am {props.age} yrs old!! ...unchanged {props.other}</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changed} value={props.name}/>
       </div>
    );
}
export default person;