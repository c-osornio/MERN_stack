import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AuthorForm from '../components/AuthorForm';
import io from 'socket.io-client';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import styles from '../components/AuthorForm.module.css';


const CreateView = () => {
    const navigate = useNavigate()
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState({});
    const [name, setName] = useState('');

    const [socket] = useState( () => io(':8000') );

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data)
            })
            .catch((err)=> {
                console.log(err);
            })
    }, [])

    const createAuthor = authorParam => {
        axios.post('http://localhost:8000/api/authors', authorParam)
            .then(res => {
                console.log(res.data)
                setAuthors([...authors, res.data])
                setName("")
                socket.emit('new_author', [...authors, res.data] )
                navigate('/authors')
            })
            .catch((err)=> {
                console.log(err);
                setErrors(err.response.data.error.errors)
            })
    }

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
                </ul>
            </div>
            <Container className= {styles.form}>
                <h1>Add a new author:</h1>
                <AuthorForm authors={authors} setAuthors={setAuthors} name={name} setName={setName} onSubmitProp={createAuthor} errors={errors}/>
            </Container>
        </>
    )
}

export default CreateView