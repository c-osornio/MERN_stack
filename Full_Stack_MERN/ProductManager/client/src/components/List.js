import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DeleteButton from './DeleteButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const List = (props) => {
    const {removeFromDom, products, setProducts} = props;
    const navigate = useNavigate()
    
    const sortedProducts = [...products].sort( (a, b) => (a.title > b.title) ? 1 : -1 );
    
    useEffect( () => {
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
                            sortedProducts.map((item, idx) => (
                                    <tr key={idx} >
                                        <td>
                                            <h4 className="text-capitalize text-warning">{item.title}
                                            {
                                                item.favorite  ? <FavoriteIcon className="ms-4" /> : <FavoriteBorderIcon className="ms-4" />
                                            }
                                            </h4>
                                        </td>
                                        <td>
                                            <Button className= "me-3" onClick={() => navigate(`/products/${item._id}`)}>View Product</Button>
                                            <Button className= "me-3" variant="warning" onClick={() => navigate(`/products/edit/${item._id}`)}>Update</Button>
                                            <DeleteButton productId={item._id} successCallback={()=>removeFromDom(item._id)} />

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

export default List