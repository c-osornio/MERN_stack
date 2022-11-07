import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav';
import ProductForm from '../components/ProductForm';
import List from '../components/List';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import styles from '../components/ProductForm.module.css';


const Main = () => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState({});
    
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

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId)); 
    }

    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/products', productParam)
            .then(res => {
                console.log(res.data)
                setProducts([...products, res.data])
            })
            .catch((err)=> {
                console.log(err);
                setErrors(err.response.data.error.errors)
            })
    }

    return (
        <>
            <Nav/>
            <Container className= {styles.form}>
                <h2>New Product</h2>
                <ProductForm products={products} setProducts={setProducts} onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" errors={errors}/>
            </Container>
            <hr/>
            <List products={products} setProducts={setProducts} removeFromDom={removeFromDom} />
        </>
    )
}

export default Main