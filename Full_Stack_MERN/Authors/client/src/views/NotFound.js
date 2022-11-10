import React from 'react'
import Nav from '../components/Nav';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
        <Nav/>
        <div className="bg-warning text-primary text-center">
            <ul className="list-inline">
                <li className="list-inline-item btn" onClick={()=> navigate('/authors')}>
                    <u>
                        <h4><HomeIcon color="primary"/>Home</h4>
                    </u>
                </li>
                <li className="list-inline-item btn" onClick={()=> navigate('/authors/new')}>
                    <u>
                        <h4><AddIcon color="primary"/>Add an author</h4>
                    </u>
                </li>
            </ul>
        </div>
        <Container className="mt-5 text-center">
            <h1>We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</h1>
            <Button variant="primary" className="me-3" onClick={()=> navigate('/authors/new')}>Add an author</Button>
        </Container>
        </>
    )
}

export default NotFound