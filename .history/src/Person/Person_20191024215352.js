import React from 'react'; // We need to import react bcz below JSX is converted
// to React element by React only

const person = (props) => {
    return (
       <div>
       <p onClick={props.click}>I am {props.name}  and i am {props.age} yrs old!! ...unchanged {props.other}</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changed}/>
       </div>
    );
}
export default person;