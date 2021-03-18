import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
   
    const total=cart.reduce((total,player)=>total+player.price,0)
    const name=cart.reduce((name,player)=>name+player.first_name,0)
    
    return (
        <div className="cartcontainer">
            <div className="cartselect">
            <h1>TEAM</h1>
            <h2>Player-Summary:{cart.length}</h2>
            <h3>NAME:{name}</h3>
            <p>Total price base:{total}</p>
            </div>
        </div>
    );
};

export default Cart;