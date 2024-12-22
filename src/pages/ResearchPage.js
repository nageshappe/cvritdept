import React from 'react';
import ResearchSidebar from '../components/ResearchSidebar';

function ResearchPage() {
  return (
    <div className="main-page">
      <ResearchSidebar/>
      <div className="main-content">
      <h1>Research Initiatives</h1>
      <p>Our department is involved in cutting-edge research in fields like AI, Cloud Computing, and more.</p>
    </div>
    </div>
  );
}

export default ResearchPage;
