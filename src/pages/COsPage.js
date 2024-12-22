import React from 'react';
import Sidebar from '../components/Sidebar';
// import './COsPage.css'; // Assuming you'll have custom styles for this page

const COsPage = () => {
  return (
    <div className="main-page">
    <Sidebar/>
    <div className="main-content">
      <h1>Course Outcomes (CO's)</h1>
      <p>Select a course to view its outcomes:</p>
      <ul>
        <li>CO1: Understand fundamental concepts of data structures and algorithms to solve complex problems.</li>
        <li>CO2: Apply object-oriented programming concepts in software development projects.</li>
        <li>CO3: Analyze and design computer networks using appropriate techniques.</li>
        <li>CO4: Apply software engineering methodologies to design and develop software systems.</li>
        <li>CO5: Demonstrate the ability to design, implement, and analyze algorithms in various problem domains.</li>
        <li>CO6: Exhibit effective communication skills and teamwork in software project development.</li>
      </ul>
    </div>
    </div>
  );
};

export default COsPage;
