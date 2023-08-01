import React, { useState } from 'react';
import {GiHamburgerMenu} from "react-icons/gi"
import {MdRestaurantMenu} from "react-icons/md"
import logo from "../../assets/gericht.png"

import './Navbar.scss';

const Navbar = () => {
  
  const [toogle, setToogle] = useState(false)
  
  return (
  <div className='navbar'>
    <div className="logo">
    <img src={logo} alt="" />
    </div>
    <ul className='menu'>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#menu">Menu</a>
      </li>
      <li>
        <a href="#award">Award</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="auth">
      <button>
        Login / Register
      </button>
      |
      <button>Booking Table</button>
    </div>
    <div className="hamburger">
      <GiHamburgerMenu onClick={() => setToogle(true)} />
    </div>
    {toogle && ( <div className="overlay">
    <ul className='menu-overlay'>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#menu">Menu</a>
      </li>
      <li>
        <a href="#award">Award</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <MdRestaurantMenu onClick={() => setToogle(false)} className='icon-overlay' />
    </ul>
    </div>)}
   
  </div>
)
  }

export default Navbar;
