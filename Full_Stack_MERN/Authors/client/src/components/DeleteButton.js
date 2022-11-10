import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import io from 'socket.io-client';

const DeleteButton = (props) => {
    
    const { authorId, successCallback } = props;

    const [socket] = useState( () => io(':8000') );
    
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res=>{
                console.log(res)
                socket.emit('remove_author', authorId )
                successCallback();
            })
    }

    return (
        <>
            <Button variant="danger" onClick={deleteAuthor}>Delete</Button>
        </>
    )
}
export default DeleteButton;