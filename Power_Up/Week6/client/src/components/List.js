import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, Link} from 'react-router-dom'


const List = () => {

    const [pizzas, setPizzas] = useState([])
    const [errors, setErrors] = useState("")
    const navigate = useNavigate()


    useEffect(() => {
        axios.get("http://localhost:8000/api/pizzas")
            .then( response => {
                console.log(response.data)
                setPizzas(response.data)
            })
            .catch( err =>{
                console.log(err)
                setErrors(err)
            })
    }, [])

    // handleClink or Link can be used
    const handleClick = (id) => {
        navigate(`/pizza/${id}`)
    }


    return  (
        <div>
            <h2>Pizzas!</h2>
            <div className="container">
                {
                    pizzas.map((item, index) => (
                        <div key={index} className="card">
                            <h3>Pizza One</h3>
                            {/* <Link to={`/pizza/${item._id}`}> */}
                                <button onClick={(e)=>handleClick(item._id)}>View Pizza</button>
                            {/* </Link> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default List;
