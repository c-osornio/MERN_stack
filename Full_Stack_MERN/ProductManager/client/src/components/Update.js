import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from './ProductForm.module.css';

const Update = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        const product = {
            title,
            price,
            description
        }
        axios.put(`http://localhost:8000/api/products/${id}`, product)
        .then((res) => {
            console.log(res.data);
            navigate("/products");
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.error.errors)
        });
    };


    return (
        <div>
            <Container className= {styles.form}>
                <h2>Update Product</h2>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={ (e) => setTitle(e.target.value)} value={title} name="title" type="text" placeholder="Enter title"/>
                        { 
                        errors.title && (<Form.Text>{errors.title.message}</Form.Text>)
                        }
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control onChange={(e) => setPrice(e.target.value)} value={price} name="price" type="number" placeholder="Enter price" min="0.00"  step="0.01"/>
                        </InputGroup>
                        { 
                        errors.price && (<Form.Text>{errors.price.message}</Form.Text>)
                        }
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <FloatingLabel label="Description: ">
                            <Form.Control onChange={(e) => setDescription(e.target.value)} value={description} name="description" type="text" placeholder="Enter description" as="textarea" style={{ height: '100px' }}/>
                        </FloatingLabel>
                        { 
                        errors.description && (<Form.Text>{errors.description.message}</Form.Text>)
                        }
                    </Form.Group>
                    <Button variant="warning" type="submit">Update Product</Button>
                </Form>
            </Container>

        </div>
    )
}

export default Update