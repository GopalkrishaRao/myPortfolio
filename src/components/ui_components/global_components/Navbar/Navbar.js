import React, { useState } from 'react';
import './navbar.css'; 
import { Link } from 'react-router-dom';

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
                <Link to={"/"}>Home</Link>
                {/* <Link to={"/services"}>Services</Link> */}
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
            <div href="#" className="menu-icon" onClick={toggleMenu}>
                <span className={`material-icons ${showMenu ? 'close-icon' : ''}`}>
                    {showMenu ? 'close' : 'menu_open'}
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
