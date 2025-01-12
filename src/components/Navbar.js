import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css"
function Navbar() {

  return (
    <div className="main-nav">
       <h1 className="font-cg-omega"><img src={process.env.PUBLIC_URL + '/images/it_cvr_logo1.webp'} width="50px" height="50px" alt="Logo" />  CVR College of Engineering </h1>
      <h1>
     
      Department of Information Technology</h1>

      <div className="navbar">

        <nav className="navbar">
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/vision">Vision & Mission</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/student">Student Activities</Link></li>
            <li><Link to="/infrastructure">Infrastructure</Link></li>
            <li><Link to="/resources">E-resources</Link></li>
            <li><Link to="/message">Message From HoD</Link></li>
          </ul>
        </nav>
      </div>
      {/* <footer className="footer">
      <div className="container">
        <p>&copy; 2024 IT Department. All rights reserved.</p>
        <p> Developed and Mantained by A.SeethaRam Nagesh ,Assoc.Professor,IT Dept.</p>
      </div>
    </footer> */}
    </div>
  );
}

export default Navbar;
