import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    const {first_name,gender,img,price}=props.player;

    return (
        <div className="player">
            <div >
                
                <img src={img} alt=""/>
                

            </div>
            <div className="playername">
            <h3>{first_name}</h3>
            <h5>{gender}</h5>
            <h4>${price}</h4>
            <button > <FontAwesomeIcon className="icon" onClick={() =>props.handlePlayer(props.player)} icon={faPlusSquare} />Add to Team</button>

            </div>
            
        </div>
    );
};

export default Player;