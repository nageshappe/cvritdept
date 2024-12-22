import React from 'react';
import { Link } from 'react-router-dom';
// import './VisionMissionPage.css'; // You can add your custom CSS here
import Sidebar from '../components/Sidebar';

const VisionMissionPage = () => {
  return (
    <div className="main-page">
      {/* Sidebar */}
      {/* <div className="sidebar">
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
      </div> */}
       <Sidebar/>
      {/* Main Content */}
      <div className="main-content">
      <h2>Vision & Mission</h2>
            <b>Vision of IT Department</b><br />
            The Department aims to produce quality Software Engineers and Data Scientists, with an attitude to adapt to ever changing IT needs of local, national and international arena, through teaching, interactions with alumni and industry.
            <br /><br />
            <b>Mission of IT department:</b>
            <br /><br />

            <b>M1:</b> To provide a holistic learning environment for students and to create awareness in legal and ethical practices.<br /><br />

            <b>M2:</b> To provide quality infrastructure through labs, other resources and to continuously upgrade to the latest technology requirements.<br /><br />

            <b>M3:</b>  To train the students in soft skills to excel in placements and competitive exams at higher levels.<br /><br />

            <b>M4:</b> To develop into a Centre of excellence for application development using open source technologies and contribute to the open source community.<br /><br />

            <b>M5: </b>  To have a healthy industry - institute interaction through faculty development programs, student internships, guest lectures and so on.<br /> <br />

            <b>M6:</b> To provide a research oriented environment for the faculty to meet the ever-changing societal needs.<br /><br />

            <b> M7:</b>  To train the PG students to be able to carry out research and development work to meet the societal needs.<br /><br />

            <b>M8:</b>  To provide effective consultancy to meet the industrial requirement.<br /><br />

      </div>
    </div>
  );
};

export default VisionMissionPage;

