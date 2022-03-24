import React from "react";
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
           <div className="product-info">
            <p className="product-name">{name}</p>
            <p>Price : ${price}</p>
            <p><smal>Seller: {seller}</smal></p>
            <p>Ratings: {ratings}</p>
           </div>
           <button className="btn-cart"><p>Add to Cart</p></button>
        </div>
    )
}
export default Product;