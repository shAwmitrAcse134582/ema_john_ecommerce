import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
     const{name,img,seller,price,ratings}=props.product;
    return (
        <div className="product" >
            <img src={img} alt=""></img>

            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>{price}$</p>
            <p><small>{seller}</small></p>
            <p><small>{ratings}stars</small></p>
            </div>
            <button  onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>

                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                </button>
                
            
           

        </div>
    );
};

export default Product;