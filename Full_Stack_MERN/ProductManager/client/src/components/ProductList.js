import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ProductList = (props) => {
    const {removeFromDom, products, setProducts} = props;
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleDelete=(productId)=>{
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then((res)=>{
            console.log(res)
            removeFromDom(productId)
            navigate('/products')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <h2>Product List</h2>

            <Container>
                <Table striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            <th>
                                <h3>Products</h3>
                            </th>
                            <th>
                                <h3>Actions</h3>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item, idx) => (
                                    <tr key={idx} >
                                        <td>
                                            <h4 className="text-capitalize text-warning">{item.title}</h4>
                                        </td>
                                        <td>
                                            <Button className= "me-3" onClick={() => navigate(`/products/${item._id}`)}>View Product</Button>
                                            <Button className= "me-3" variant="warning" onClick={() => navigate(`/products/edit/${item._id}`)}>Update</Button>
                                            <Button variant="danger" onClick={(e)=>{handleDelete(item._id)}}>Delete</Button>
                                        </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default ProductList