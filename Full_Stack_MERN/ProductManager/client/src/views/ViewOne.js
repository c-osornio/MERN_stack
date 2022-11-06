import React from 'react'
import Nav from '../components/Nav';
import OneProduct from '../components/OneProduct';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const ViewOne = () => {

    return (
        <>
            <Nav/>
            <OneProduct/>
            <Link to="/products"><Button>Go Back</Button></Link>
        </>
    )
}

export default ViewOne