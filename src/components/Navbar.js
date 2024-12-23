import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
function Navbar() {

  return (
  <div className="navbar">
    {/* <h1>Department of Information Technology</h1> */}
      
  <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vision">Vision & Mission</Link></li>
        <li><Link to="/faculty">Faculty</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/student">Student Activities</Link></li>
        <li><Link to="/infrastructure">Infrastructure</Link></li>
      </ul>
    </nav>
  </div>
  );
}

export default Navbar;
