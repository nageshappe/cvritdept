import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css"
function Navbar() {

  return (
    <div className="main-nav">
      <h1><img src={process.env.PUBLIC_URL + '/images/it_cvr_logo1.webp'} width="50px" height="50px" alt="Logo" />

      Department of Information Technology</h1>

      <div className="navbar">

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
    </div>
  );
}

export default Navbar;
