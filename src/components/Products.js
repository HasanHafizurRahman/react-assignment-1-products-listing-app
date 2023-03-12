/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
    console.log(products)
    return (
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
            {products.map(product => <Product
                key={product.id}
                product={product}
            />)}
        </div>
    );
};

export default Products;