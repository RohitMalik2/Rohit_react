import React from 'react';

const Person = (props) =>{
    return (
        <div className="Person">
            <p onClick={props.click}>Person: name - {props.name}Person: age - {props.age}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    );
};

export default Person;