import React, { useEffect, useState } from 'react';
import './navbar.css'; 
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  
// Navbar scroll hide/show scolle
const [prevScrollpos, setPrevScrollpos]=useState(window.pageYOffset);
useEffect(()=>{
const handleScroll = ()=>{
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
    
  } else {
    document.getElementById('navbar').style.top = '-250px';
    // document.getElementById('navbar').style.transition="top 0.4s ease"
  }
  setPrevScrollpos(currentScrollPos);
};


window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
},[prevScrollpos])



    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.marginRight = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      }
    
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginRight= "0";
        document.body.style.backgroundColor = "white";
      }


  return (
    <>
    <nav className="navbar" id='navbar'>
            <div className="navbar-left">
                <div className="navbar-title">Rao</div>
            </div>
            <div 
            className="navbar-right">
                <Link to={"/"}>Home</Link>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>

    <div className='hamberger'>
    <div id="mySidenav" className="sidenav ">
        <span  className="hambergerClose" onClick={closeNav}>
            <FaTimes/>
        </span>
                <Link to={"/"}>Home</Link>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
    </div>
    <div id="main">
        <span  className= 'hambergerOpen' onClick={openNav}>
            < FaBars/>
        </span>
    </div>
    </div>

    </nav>
    </>
  )
}
