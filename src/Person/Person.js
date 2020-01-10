import React from 'react';

const Person = (props) =>{
    const style = {
        '@media (minWidth: 500px)': {
            width: '450px'
        }
    };

    const rnd = Math.random();
    if(rnd > 0.7) {
        throw new Error('Something went wrong!!');
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Person: name - {props.name}Person: age - {props.age}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    );
};

export default Person;