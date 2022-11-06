import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ProductView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleDelete=()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res)
            navigate('/products')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
            <Container>
                <h1 className= "text-capitalize">{product.title}</h1>
                <Table striped hover size="sm">
                    <thead>
                        <th>
                            <h4 className="text-success">Price:</h4>
                        </th>
                        <th>
                            <h4 className="text-success">Description:</h4>
                        </th>
                        <th>
                            <h4 className="text-success">Actions:</h4>
                        </th>
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
                                <Button variant="danger" onClick={(e)=>{handleDelete(product._id)}}>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default ProductView