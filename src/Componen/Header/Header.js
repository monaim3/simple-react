import React from 'react';
import logo from'../../img/dd-logo.png';
import './Header.css';

const Header = () => {
    return (
        <div class="header">
            <div class="logo">
            <img src={logo} alt=""/>
            </div>
            <div class="navbar">
                <ul>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Players</a>
                </ul>
            </div>
           
        </div>
    );
};

export default Header;