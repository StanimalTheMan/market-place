import axios from "axios";
import { useEffect, useState } from "react";

import Product from "./Product";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/products').then((response) => {
        setProducts(response.data.data);
            setIsLoading(false);
        });
    }, []);
    console.log(products)
    return (
        isLoading ? <p>Loading...Insert loading icon</p> : products.map(product => <Product key={product.id} title={product.attributes.title} price={product.attributes.price} published={product.attributes.published} />)
    )
};

export default ProductList;