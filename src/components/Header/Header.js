import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/Categories">Categories</a>
                <a href="/Business">Udemy for Business</a>
                <a href="/Tech">Teach to Udemy</a>
            </nav>
        </div>
    );
};

export default Header;