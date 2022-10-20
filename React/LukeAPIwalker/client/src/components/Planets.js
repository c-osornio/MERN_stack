import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";

const Planets = (props) => {
    const { id } = useParams();
    const [starwarsData, setStarwarsData] = useState({});
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                console.log(response.data);
                setIsError(false);
                setStarwarsData(response.data);
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
            });
    }, [id]);

    if (!isError) {
        return (
            <div>
                <h1>{starwarsData.name}</h1>
                <p>Climate: {starwarsData.climate}</p>
                <p>Terrain: {starwarsData.terrain}</p>
                <p>Surface Water: {starwarsData.surface_water}</p>
                <p>Population: {starwarsData.population}</p>
            </div>
        );
    } else {
        return (
            <>
                <img
                    src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg?w=800&quality=85"
                    alt="Obi-Wan Kenobi"
                />
                <h3>"These aren't the droids you're looking for!" - Obi-Wan Kenobi</h3>
            </>
        );
    }
};

export default Planets;