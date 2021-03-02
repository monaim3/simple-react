import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart=props.cart;
 

    let total=0;
    for(let i=0; i<cart.length; i++){
        const sum= cart[i];
        total=Math.round(total + sum.selary);
    }
    return (
        <div class='cart'>
            
              <h2>Total Player Selected: {cart.length}</h2>
             
              <h2>Total Budget: ${total}</h2>
              <h3>Player name is</h3>

        </div>
    );
};

export default Cart;