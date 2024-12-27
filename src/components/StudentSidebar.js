import React from 'react';
import { Link } from 'react-router-dom';
import "../css/VisionMission.css"

function StudentSidebar() {
  return (
    <div className="sidebar">
            <ul>
              <li>
                <Link to="/ingenuity">Ingenuity</Link>
              </li>
              {/* <li>
                <Link to="/nitygrity">NITyGrITy</Link>
              </li>
              <li>
                <Link to="/digitalliterati">Digital Literati</Link>
              </li> */}
              <li>
                <Link to="/workshops">Student Workshops</Link>
              </li>
              <li>
                <Link to="/guestlectures">GuestLectures</Link>
              </li>
            </ul>
          </div>
    
  );
}

export default StudentSidebar;
