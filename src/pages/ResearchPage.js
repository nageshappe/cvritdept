import React from 'react';
import ResearchSidebar from '../components/ResearchSidebar';
import FacultyPublicationTable from '../components/FacultyPublicationTable'
import faculty_publications from "../data/totalpublications.json"
import "../css/Research.css"
function ResearchPage() {
  return (
    <div className="main-page">
      <ResearchSidebar/>
        {/* console.log({faculty_publications.faculty_publications}) */}
      <div className="main-content">
      <h1 className="text-center">Research & Publications</h1>
      <p>Our department is involved in cutting-edge research in fields like AI, Cloud Computing, and more.</p>
      <FacultyPublicationTable data={faculty_publications.faculty_publications}/>
    </div>
    </div>
  );
}

export default ResearchPage;
