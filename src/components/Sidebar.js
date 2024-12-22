import React from 'react';
import { Link } from 'react-router-dom';
import "./VisionMission.css"
function Sidebar() {
  return (
    <div className="sidebar">
            <ul>
              <li>
                <Link to="/vision">Vision & Mission</Link>
              </li>
              <li>
                <Link to="/peos">PEO's</Link>
              </li>
              <li>
                <Link to="/pos">PO's</Link>
              </li>
              <li>
                <Link to="/cos">CO's</Link>
              </li>
              <li>
                <Link to="/cos18">CO's18</Link>
              </li>
            </ul>
          </div>
    
  );
}

export default Sidebar;
