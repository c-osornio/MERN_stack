import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const DeleteButton = (props) => {
    
    const { productId, successCallback } = props;
    const navigate = useNavigate()
    
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res=>{
                console.log(res)
                navigate('/products')
                successCallback();
            })
    }

    return (
        <>
            <Button variant="danger" onClick={deleteProduct}>Delete</Button>
        </>
    )
}
export default DeleteButton;

