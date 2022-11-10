import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav';
import ProductForm from '../components/ProductForm';
import List from '../components/List';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import styles from '../components/ProductForm.module.css';
import io from 'socket.io-client';


const Main = () => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState({});
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [favorite, setFavorite] = useState(false);

    const [socket] = useState( () => io(':8000') );
    
    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/products', productParam)
            .then(res => {
                console.log(res.data)
                setProducts([...products, res.data])
                setTitle("")
                setPrice("")
                setDescription("")
                setFavorite(false)
                socket.emit('new_product', [...products, res.data] )
            })
            .catch((err)=> {
                console.log(err);
                setErrors(err.response.data.error.errors)
            })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data)
            })
            .catch((err)=> {
                console.log(err);
            })
    }, [])

    useEffect( () => {
        console.log('Socket is running');
        socket.on('receive_products', (products) => {
            console.log("Received Products", products)
            setProducts(products)
            return () => socket.disconnect(true);
        });
        socket.on('receive_removal', (data) => {
            console.log("Received Product Id for Removal:", data)
            setProducts(products.filter( product => product._id !== data))
            return () => socket.disconnect(true);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket, products] );

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId)); 
    }


    return (
        <>
            <Nav/>
            <Container className= {styles.form}>
                <h2>New Product</h2>
                <ProductForm products={products} setProducts={setProducts} title={title} price={price} description={description} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} favorite={favorite} setFavorite={setFavorite} onSubmitProp={createProduct} errors={errors}/>
            </Container>
            <hr/>
            <List products={products} setProducts={setProducts} removeFromDom={removeFromDom} />
        </>
    )
}

export default Main