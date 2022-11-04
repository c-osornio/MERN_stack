import React, { useState } from "react";
import axios from "axios";
import styles from './ProductForm.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        const product = {
            title,
            price,
            description
        }
        axios.post("http://localhost:8000/api/products", product)
            .then((res) => {
                console.log(res.data);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.error.errors)
            })
    }

    return (
        <div>

            <header>
                <h1 className= "mb-5">Product Manager</h1>
            </header>
            <div className= {styles.form} >
                <h2>New Product</h2>
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
                    <Button variant="primary" type="submit">Create Product</Button>
                </Form>
            </div>

        </div>
    );
};

export default ProductForm;