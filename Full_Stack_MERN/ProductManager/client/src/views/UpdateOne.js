import React from 'react'
import Nav from '../components/Nav';
import Update from '../components/Update';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const UpdateOne = () => {
    return (
        <>
            <Nav />
            <Update />
            <Link to="/products"><Button>Go Back</Button></Link>
        </>
    )
}

export default UpdateOne