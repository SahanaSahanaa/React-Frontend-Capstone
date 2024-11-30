import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/image_icon/Logo.svg" alt="logo" style={{width:"200px"}}/>
       </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
