import React, { useState } from 'react';

const PersonCard= (props) => {
    const {firstName, lastName, age, hairColor} = props
    const [years, setYears] = useState(age);
    const handleClick = () => {
        setYears(years + 1);
    }
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {years}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ handleClick }>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard