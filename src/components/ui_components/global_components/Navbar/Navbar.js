import React, { useState } from 'react';
import './navbar.css'; 
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
 
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-title">Rao</div>
            </div>
            <div 
            className={`navbar-right ${showMenu ? 'show' : ''}`}>
                <Link to={"/"}>Home</Link>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <span className="icon">
                    {showMenu ? <FaTimes /> : <FaBars />}
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
