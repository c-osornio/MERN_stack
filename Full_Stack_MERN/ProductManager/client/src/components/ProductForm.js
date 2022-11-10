import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



const ProductForm = (props) => {
    const {onSubmitProp, errors, title, price, description, setTitle, setPrice, setDescription, favorite} = props;

    const submitHandler = (e) => {
        e.preventDefault();
        const product = {
            title,
            price,
            description,
            favorite
        }
        onSubmitProp(product)
    }

    return (
        <>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control className="text-capitalize" onChange={ (e) => setTitle(e.target.value)} value={title} name="title" type="text" placeholder="Enter title"/>
                        { 
                        errors.title && (<Form.Text className="text-danger fs-5">{errors.title.message}</Form.Text>)
                        }
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control onChange={(e) => setPrice(e.target.value)} value={price} name="price" type="number" placeholder="Enter price" min="0.00"  step="0.01"/>
                        </InputGroup>
                        { 
                        errors.price && (<Form.Text className="text-danger fs-5">{errors.price.message}</Form.Text>)
                        }
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <FloatingLabel label="Description: ">
                            <Form.Control onChange={(e) => setDescription(e.target.value)} className="text-capitalize" value={description} name="description" type="text" placeholder="Enter description" as="textarea" style={{ height: '100px' }}/>
                        </FloatingLabel>
                        { 
                        errors.description && (<Form.Text className="text-danger fs-5">{errors.description.message}</Form.Text>)
                        }
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
        </>
    );
};

export default ProductForm;