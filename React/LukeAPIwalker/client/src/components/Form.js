import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const [resource, setResource] = useState("");
    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${resource}/${id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Search for: </label>
            <select onChange={ e => setResource(e.target.value)} >
                <option value="">------</option>
                <option value= "people">People</option>
                <option value= "planets">Planets</option>
                <option value= "vehicles">Vehicles</option>
            </select>
            <br/>
            <label>ID: </label>
            <input type="text" onChange= { e => setId(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    )
}

export default Form;