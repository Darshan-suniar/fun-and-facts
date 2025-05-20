import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
 const [show,setShow]= useState(false)

  const handleButtonToggle =()=>{
return setShow(!show)
  }
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to={"/"}>
              <h1>WorldAltas</h1>
            </NavLink>
          </div>
          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}><FaHamburger /></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
