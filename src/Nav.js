import React from 'react';

function Nav(){
    return(
        <nav>
            <img src="./logo.svg" alt="Little Lemon Logo" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Log In</a></li>
            </ul>
        </nav>
    );
}

export default Nav;