import React from 'react';
import Hambergurmenu from './hamberger/HambergerMenu';
import './navbar.css';

export default function Navbar() {
  return (
    <>
   <div className="navbar bg-base-100 sticky top-0 Class
Properties z-[1] overflow-hidden">
    <div className="navbar-start">
      <div className="dropdown lg:hidden ">
        <Hambergurmenu/>
      </div>
    </div>
       <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li >
          <a href='#home'>Home</a>
        </li>
        <li>
        <a href='#projects'>Projects</a>
        </li>
        <li>
        <a href='#about'>About</a>
        </li>
        <li>
          <a href='#contact'>
          Contact
          </a>
        </li>
      </ul>
    </div>
  <div className="navbar-end">
  </div>
  </div>
  
  
</>
  )
};
