import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const One = (props) => {
    const {id} = useParams() 
    const [info, setInfo] = useState([])
    const navigate = useNavigate()


    const handleExit = () => {
        navigate("/")
    }

    useEffect( () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => {
                console.log(response.data.meals[0])
                setInfo(response.data.meals[0])
            })
            .catch(err=> console.log(err))
    }, [])

    return (

        <div className="card-view">
            <button className="btn exit hover" onClick={handleExit}>&#215;</button>
            <h1>{info.strMeal} - {info.strCategory}</h1>
            <img src={info.strMealThumb} alt={info.strMeal} width="600px" height="300px"/>
            <h2>DIRECTIONS:</h2>
            <h2>{info.strInstructions}</h2>
        </div>
    )
}

export default One