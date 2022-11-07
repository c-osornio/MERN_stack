import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DeleteButton from './DeleteButton';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId)); 
    }

    return (
        <>
            <Container>
                <h1 className= "text-capitalize">{product.title}</h1>
                <Table striped hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                <h4 className="text-success">Price:</h4>
                            </th>
                            <th>
                                <h4 className="text-success">Description:</h4>
                            </th>
                            <th>
                                <h4 className="text-success">Actions:</h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h4>${product.price}</h4>
                            </td>
                            <td>
                                <h4>"{product.description}"</h4>
                            </td>
                            <td>
                                <Button className= "me-3" variant="warning" onClick={() => navigate(`/products/edit/${product._id}`)}>Update</Button>
                                <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Details