import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DeleteButton from './DeleteButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [favorite, setFavorite] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setFavorite(res.data.favorite);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }

    const toggleFavorite = ()=> {
        const product = {
            title,
            price,
            description,
            favorite: !favorite
        }
        setProduct(product)
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then((res) => {
                setFavorite(!favorite)
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Container>
                <h1 className="text-capitalize">{product.title}
                    {
                        product.favorite  ? <FavoriteIcon className="ms-4" /> : <FavoriteBorderIcon className="ms-4" />
                    }
                </h1>
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
                                <h4 className="text-capitalize">"{product.description}"</h4>
                            </td>
                            <td>
                                {
                                    product.favorite  ? <Button className="me-3" variant="danger" onClick={ toggleFavorite }> Unfavorite</Button> : <Button className="me-3" variant="success" onClick={ toggleFavorite } >Favorite</Button>
                                }
                                <Button className="me-3" variant="warning" onClick={() => navigate(`/products/edit/${product._id}`)}>Update</Button>
                                <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Details