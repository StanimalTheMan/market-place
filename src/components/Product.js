import React from 'react';

const Product = ({ title, price, published }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{'$' + (+price).toFixed(2)}</p>
            <p>{"Published: " + published ? "Yes" : "No"}</p>
        </>
    )
};

export default Product;