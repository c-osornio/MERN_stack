import React, { useState } from 'react';

const PersonCard= (props) => {
    const {firstName, lastName, age, hairColor} = props
    const [stateAge, setStateAge] = useState(age);
    
    const handleClick = () => {
        setStateAge(stateAge + 1);
    }
    
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ handleClick }>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard