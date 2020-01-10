import React from 'react';

const Person = (props) =>{
    return (
       <div>
            <p>Person: name - {props.name}</p>
            <p>Person: age - {props.age}</p>

       </div>
    );
};

export default Person;