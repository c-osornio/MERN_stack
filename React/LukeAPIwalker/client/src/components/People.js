import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const People = (props) => {
    const { id } = useParams();
    const [starwarsData, setStarwarsData] = useState({});
    const [homeworld, setHomeworld] = useState("");
    const [homeworldId, setHomeworldId] = useState();
    const [vehciles, setVehciles] = useState([])
    const [vehcileId, setVehcileId] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                console.log(response.data);
                setIsError(false);
                setStarwarsData(response.data);
                getHomeworldId(response.data.homeworld);
                axios.get(response.data.homeworld)
                    .then((response) => {
                        console.log(response.data.name);
                        setHomeworld(response.data.name);
                    })
                    .catch(err => console.log(err));
                if(response.data.vehicles) {
                    getVehcileId(response.data.vehicles);
                    axios.get(response.data.vehicles[0])
                        .then((response) => {
                            console.log(response.data);
                            setVehciles(response.data);
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(err => {
                console.log(err);
                setIsError(true);
            });
    }, [id]);

    const getHomeworldId = (homeworldURL) => {
        // check if the ID has only one character 
        if (homeworldURL.charAt(homeworldURL.length - 3) === "/") {
            // console.log(homeworldURL)
            // console.log(homeworldURL.length - 3)
            // console.log(homeworldURL.charAt(homeworldURL.length - 3));
            const hwId = homeworldURL.charAt(homeworldURL.length - 2);
            setHomeworldId(hwId);
        } else {
            const firstCharId = homeworldURL.charAt(homeworldURL.length - 3);
            const secondCharId = homeworldURL.charAt(homeworldURL.length - 2);
            const idString = `${firstCharId}${secondCharId}`;
            setHomeworldId(idString);
        }
        // check for 2 character ID
    };

    const getVehcileId = (vehcileURL) => {
        // check if the ID has only one character 
        console.log(vehcileURL[0])
        if (vehcileURL[0].charAt(vehcileURL[0].length - 3) === "/") {
            // console.log(vehcileURL)
            // console.log(vehcileURL.length - 3)
            // console.log(vehcileURL.charAt(vehcileURL.length - 3));
            const vehcileId = vehcileURL[0].charAt(vehcileURL[0].length - 2);
            setVehcileId(vehcileId);
        } else {
            const firstCharId = vehcileURL[0].charAt(vehcileURL[0].length - 3);
            const secondCharId = vehcileURL[0].charAt(vehcileURL[0].length - 2);
            const idString = `${firstCharId}${secondCharId}`;
            setVehcileId(idString);
        }
        // check for 2 character ID
    };

    if (!isError) {
        return (
            <div>
                <h1>{starwarsData.name}</h1>
                <p>Height: {starwarsData.height}</p>
                <p>Hair Color: {starwarsData.hair_color}</p>
                <p>Eye Color: {starwarsData.eye_color}</p>
                <p>Skin Color: {starwarsData.skin_color}</p>
                <p>Homeworld: <Link to={`/planets/${homeworldId}`}>{homeworld}</Link></p>
                <p>Vehciles: <Link to={`/vehicles/${vehcileId}`}>{vehciles.name}</Link></p>
            </div>
        );
    } else {
        return (
            <>
                <img
                    src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg?w=800&quality=85"
                    alt="Obi-Wan Kenobi"
                />
                <h3>"These aren't the droids you're looking for" - Obi-Wan Kenobi</h3>
            </>
        );
    }
};

export default People;