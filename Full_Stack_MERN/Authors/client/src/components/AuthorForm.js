import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'

const AuthorForm = (props) => {
    const {onSubmitProp, errors, name, setName} = props;
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        const author = {
            name
        }
        onSubmitProp(author)
    }

    return (
        <>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Author's Name:</Form.Label>
                        <Form.Control className="text-capitalize" onChange={ (e) => setName(e.target.value)} value={name} name="name" type="text" placeholder="Enter name"/>
                        { 
                        errors.name && (<Form.Text className="text-danger fs-5">{errors.name.message}</Form.Text>)
                        }
                    </Form.Group>
                    <Button variant="danger" className="me-3" onClick={()=> navigate('/authors')}>Cancel</Button>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
        </>

    )
}

export default AuthorForm