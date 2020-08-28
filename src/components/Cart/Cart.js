import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
  
    let total = 0;
    let eachPrice = 0;
    
    for(let i=0;i<cart.length;i++){
        const product = cart[i];
        total = total + product.price;
    }
    for(let i=0;i<cart.length;i++){
        const product = cart[i];
        eachPrice = product.price;
    }

    const grandTotal = (total).toFixed(2);
    return (
        <div>
            <h4>Course Summary</h4>
            <p>Course Added : {cart.length}</p>
            <p>Course price : $ {eachPrice}</p>
            <p>Total price : ${grandTotal}</p>
            <ol>
                {
                    cart.map((product) => <li>{product.title}</li>)
                }
            </ol>
            <button type="button" class="btn btn-warning">Buy Now</button> 
        </div>
    );
};

export default Cart;