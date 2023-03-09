import './hambergerMenu.css'
import { useState } from "react";

export default function Hambergurmenu() {
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [mainMarginLeft, setMainMarginLeft] = useState(0);

  function openNav() {
    setSidebarWidth(250);
    setMainMarginLeft(250);
  }

  function closeNav() {
    setSidebarWidth(0);
    setMainMarginLeft(0);
  }

  return (
    <>
      <div
        id="mySidebar"
        className="sidebar"
        style={{ width: sidebarWidth }}
      >
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <ul className=" p-0">
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

      <div id="main">
        <button className="openbtn" onClick={openNav}>
          ☰ 
        </button>
        
      </div>
    </>
  );
}
