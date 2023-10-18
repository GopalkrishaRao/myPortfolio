import React, { useState } from 'react';
import './navbar.css'; 

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="home" className="navbar-title">Rao</a>
            </div>
            <div className={`navbar-right ${showMenu ? 'show' : ''}`}>
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">Project</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <a href="#" className="menu-icon" onClick={toggleMenu}>
                <span className={`material-icons ${showMenu ? 'close-icon' : ''}`}>
                    {showMenu ? 'close' : 'menu_open'}
                </span>
            </a>
        </nav>
    );
};

export default Navbar;
