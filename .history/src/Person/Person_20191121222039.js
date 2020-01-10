import React from 'react';

const Person = (props) =>{
    return (
       <div>
            <p>Person: name - {props.name}Person: age - {props.age}</p>
       </div>
    );
};

export default Person;