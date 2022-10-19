import { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate, Link} from "react-router-dom";


const All = (props) => {
    const navigate = useNavigate();
    const [desserts, setDesserts] = useState([])

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
            .then(response => {
                // console.log(response.data.meals)
                setDesserts(response.data.meals)
            })
            .catch(err => console.log(err))
    }, [])

    const handleView = (id) => {
        navigate(`/desserts/${id}`)
    }

    return (
        <div className="cards">
            {
                desserts.map((item, index) => (
                    <div key={index} className="card hover" style ={{ backgroundImage : `url(${item.strMealThumb})`}}>
                        <h2>{item.strMeal}</h2>
                        <Link to={`/desserts/${item.idMeal}`}><button className="btn" onClick={() => handleView(item.idMeal)}> view </button></Link>
                    </div>
                ))
            }
        </div>
    )
}

export default All