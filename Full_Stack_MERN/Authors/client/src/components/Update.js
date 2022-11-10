import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import styles from './AuthorForm.module.css';
import AuthorForm from './AuthorForm';

const Update = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState({})
    const [errors, setErrors] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [name, setName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res.data);
            setAuthor(res.data);
            setName(res.data.name);
            setLoaded(true);
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 404){
                navigate("/authors/notfound")
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updateAuthor = authorParam => {
        axios.put(`http://localhost:8000/api/authors/${id}`, authorParam)
        .then((res) => {
            console.log(res.data);
            navigate("/authors");
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.error.errors)
        });
    };


    return (
        <div>
            <Container className= {styles.form}>
                <h2>Edit {author.name}</h2>
                {
                    loaded && <AuthorForm onSubmitProp={updateAuthor} name={name} errors={errors} setName={setName}/>
                }
            </Container>

        </div>
    )
}

export default Update