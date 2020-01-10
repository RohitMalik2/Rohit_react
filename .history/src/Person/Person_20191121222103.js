import React from 'react';

const Person = (props) =>{
    return (
            <p>Person: name - {props.name}Person: age - {props.age}</p>
    );
};

export default Person;