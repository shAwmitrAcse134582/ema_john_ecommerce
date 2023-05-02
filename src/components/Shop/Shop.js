import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from '../Product/Product';

const Shop = () => {
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart,setCart];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
               {
                products.map(product=><Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
               }
            </div>

            <div className='cart-container'>
                <h2>Order Summary</h2>
                <h3>Selected Item:{cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;