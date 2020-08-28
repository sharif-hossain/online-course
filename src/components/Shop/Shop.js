import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first12 = fakeData.slice(0,12);
    // const [products,setProducts] = useState(first10);
   const [products,setProducts] = useState(first12);
   const [cart, setCart] = useState([]);
   const handleAddCourse = (product) =>{
       const newCart = [...cart,product];
       setCart(newCart);
   }
    return (
        <div className="shop-container">
            <div className="product-container">
                
                {
                    products.map(pd => <Course handleAddCourse ={handleAddCourse} product={pd}></Course>)
                }
            
            </div>
            <div className="cart-container">
                
                <Cart cart={cart}></Cart>
            
            </div>
            
        </div>
    );
};

export default Shop;