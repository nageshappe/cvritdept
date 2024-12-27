import React from 'react';
import { Link } from 'react-router-dom';
import "../css/VisionMission.css"
function InfrastructureSidebar() {
  return (
    <div className="sidebar">
            <ul>
              <li>
                <Link to="/infrastructure">InfrastructurePage</Link>
              </li>
              <li>
                <Link to="/labs">Lab Facilities</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              
              
            </ul>
          </div>
    
  );
}

export default InfrastructureSidebar;
