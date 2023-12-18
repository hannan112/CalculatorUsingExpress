// Navbar.js

import React from 'react';
import './navbar.css';

const Navbar = ({ onButtonClick }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>calculator</h1>
      </div>
      <div className="navbar-right">
        <button onClick={() => onButtonClick('home')}>Home</button>
        <button onClick={() => onButtonClick('calculator')}>Calculator</button>
        <button onClick={() => onButtonClick('quote')}>Quote</button>
      </div>
    </div>
  );
};

export default Navbar;
