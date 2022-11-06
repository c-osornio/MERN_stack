import React, { useState } from 'react'
import Nav from '../components/Nav';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const [products, setProducts] = useState([]);

    return (
        <>
            <Nav/>
            <ProductForm products={products} setProducts={setProducts} />
            <hr/>
            <ProductList products={products} setProducts={setProducts} />
        </>
    )
}

export default Main