import React from 'react';
import logo from '../../images/5906d988cbd5eb90d1c433ebdac1f926.jpg'
import './Header.css'



const Header = () => {
    return (
        <div className="header">
            <h1>BPL-AUCTION</h1>
            <img src={logo} alt=""/>
                
                <nav><a href="/home">Home</a><a href="/Player">Player</a><a href="/Budget">Budget</a></nav>
        
        
       
           
        </div>
    );
};

export default Header;