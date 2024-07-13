// src/Header.js
import React, { useState } from 'react';
import '../components/Header.css';
import "react-icons/";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header'>
      <div className='nav-container'>
        <div className='logo'></div>
        <div className='menu-icon' onClick={toggleMenu}>
          <i className='fas fa-bars'></i>
        </div>
        <div className={`nav-items ${menuOpen ? 'open' : ''}`} id='flex-item'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skills</a></li>
        </div>
      </div>
    </div>
  );
};

export default Header;
