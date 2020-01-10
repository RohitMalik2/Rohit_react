import React from 'react';

const Person = (props) =>{
    return (
        <div className="Person">
            <p onClick={props.click}>Person: name - {props.name}Person: age - {props.age}</p>
            <input type="text" value={props.name}/>
        </div>
    );
};

export default Person;