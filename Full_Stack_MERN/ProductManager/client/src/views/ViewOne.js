import React from 'react'
import Nav from '../components/Nav';
import Details from '../components/Details';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const ViewOne = () => {

    return (
        <>
            <Nav/>
            <Details/>
            <Link to="/products"><Button>Go Back</Button></Link>
            
        </>
    )
}

export default ViewOne