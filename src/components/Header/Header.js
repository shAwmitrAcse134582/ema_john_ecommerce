import React from 'react';
import logo from '../../images/Logo.svg'
import  './Header.css'

const Header = () => {
    return (
       <nav className='header'>
        <img src={logo} alt=''></img>
        <div>
            <a href='/shop'>shop</a>
            <a href='/inventory'>inventory</a>
            <a href='/orders'>orders</a>
            <a href='/about'>about</a>
        </div>
       </nav>
    );
};

export default Header;