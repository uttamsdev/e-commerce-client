import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="shop-container">
            <div className="product-container">
               {
                   products.map(product => <Product product={product} key={product.id}></Product>)
               }
            </div>

            <div className="cart-container">
                <h1>Order Summary</h1>
            </div>
        </div>
    )
}
export default Shop;