import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import styles from './ProductForm.module.css';
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';

const Update = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [errors, setErrors] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [favorite, setFavorite] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setFavorite(res.data.favorite)
            setLoaded(true);
        })
        .catch((err) => {
            console.log(err);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updateProduct = productParam => {
        axios.put(`http://localhost:8000/api/products/${id}`, productParam)
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
                {
                    loaded && <ProductForm onSubmitProp={updateProduct} title={title} price={price} description={description} errors={errors} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} favorite={favorite}/>
                }
                <br/>
                <DeleteButton productId={product._id} successCallback={() => navigate("/products")} />
            </Container>

        </div>
    )
}

export default Update