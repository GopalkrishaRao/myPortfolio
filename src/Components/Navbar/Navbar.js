import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className='nav'>
        <Link to={"/"} className="ul">Home</Link>
        <Link to={"/links"} className="ul">Links</Link>
        <Link to={"/about"} className="ul">About</Link>
        <Link to={"/projects"} className="ul">Projects</Link>
        <Link to={"/contact"} className="ul">Contact</Link>

    </nav>
    </>
  )
};
