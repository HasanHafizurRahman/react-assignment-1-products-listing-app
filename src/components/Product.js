/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({ product }) => {
  console.log(product.title)
  return (
      <article className="product">
      <img className="product__img" src={product.image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{product.title}</h4>
        <p style={{color: "blueviolet"}}>Price: $ {product.price}</p>
        <p style={{color: "blueviolet"}}>Rating: {product.rating.rate}</p>
        <p className="product__desc">Description: {product.description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
