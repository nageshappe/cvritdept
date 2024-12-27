import React from 'react';
import { Link } from 'react-router-dom';
import "../css/VisionMission.css"
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
                <Link to="/cos18">CO-R18</Link>
              </li>
              <li>
                <Link to="/cos">CO-R22</Link>
              </li>
            </ul>
          </div>
    
  );
}

export default Sidebar;
