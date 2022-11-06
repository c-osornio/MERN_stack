/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const View = () => {
    const {id} = useParams()
    const [pizza, setPizza] = useState({})
    const [errors, setErrors] = useState("")


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pizzas/${id}`)
            .then( response => {
                console.log(response.data)
                setPizza(response.data)
            })
            .catch( err =>{
                console.log(err)
                setErrors(err)
            })
    }, [])

    return (
        <div>
            <h2>My Pizza</h2>
            <p>Pizza</p>
        </div>
    )
}

export default View