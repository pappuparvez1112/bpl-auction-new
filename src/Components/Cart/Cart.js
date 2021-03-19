import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    
   
    const total=cart.reduce((total,player)=>total+player.price,0);
    const name=cart.reduce((name,player)=>player.first_name,0);
    
    
    return (
        <div className="cartcontainer">
            <div className="cartselect">
            <h1>TEAM</h1>
            <h2>Player-Summary:{cart.length}</h2>
            <h3>name:{name}</h3>
            <h4>BANGLADESH</h4>
            <p>Total price base:{total}</p>
            </div>
            
        </div>
    );
};

export default Cart;