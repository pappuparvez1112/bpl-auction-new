import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import FakeData from '../FakeData/FakeData.json';
import Player from '../Player/Player';
import './SelectPlayer.css'


const SelectPlayer = () => {
    console.log(FakeData);
    const first10=FakeData.slice(0,15);
    const [players,setPlayers]=useState(first10);
    const [cart,setCart]=useState([]);
    const handlePlayer=(player)=>{
        console.log('player added',player)
     const newCart=[...cart,player];
     setCart(newCart);   
    }
    return (
       
      
        <div className="selectcontainer">
            <div className="playercontainer">
            <ul>
                {
                    players.map(player=><Player 
                        handlePlayer={handlePlayer}
                        
                        player={player}></Player>)
                }
            </ul>

            </div>
            <div className="teamcontainer">
                
                <Cart cart={cart}></Cart>
            </div>
            
            
          
        </div>
    );
};

export default SelectPlayer;