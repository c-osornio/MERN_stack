import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import io from 'socket.io-client';

const DeleteButton = (props) => {
    
    const { productId, successCallback } = props;
    const navigate = useNavigate()

    const [socket] = useState( () => io(':8000') );
    
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res=>{
                console.log(res)
                socket.emit('remove_product', productId )
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

