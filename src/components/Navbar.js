import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vision">Vision & Mission</Link></li>
        <li><Link to="/faculty">Faculty</Link></li>
        <li><Link to="/research">Research</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
