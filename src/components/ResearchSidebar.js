import React from 'react';
import { Link } from 'react-router-dom';
import "./VisionMission.css"
function ResearchSidebar() {
  return (
    <div className="sidebar">
            <ul>
              <li>
                <Link to="/research">Research & Publications</Link>
              </li>
              <li>
                <Link to="/fdps">FDP's</Link>
              </li>
              <li>
                <Link to="/publications">Publication's</Link>
              </li>
              <li>
                <Link to="/conferences">Conference's</Link>
              </li>
              <li>
                <Link to="/patents">Patents</Link>
              </li>
            </ul>
          </div>
    
  );
}

export default ResearchSidebar;
