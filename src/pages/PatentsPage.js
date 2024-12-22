import React, { useState } from 'react';
import ResearchPage from './ResearchPage';
import ResearchSidebar from '../components/ResearchSidebar';

const PatentsPage = () => {
  const patents = {
    2023: [
      { title: 'AI-based Healthcare System', inventor: 'Dr. John Doe', patentNumber: 'US1234567', status: 'Granted' },
      { title: 'Energy-efficient IoT Devices', inventor: 'Dr. Rahul Kumar', patentNumber: 'IN7654321', status: 'Filed' },
    ],
    2022: [
      { title: 'Blockchain for Secure Transactions', inventor: 'Prof. Jane Smith', patentNumber: 'US9876543', status: 'Granted' },
    ],
    // More patents year-wise
  };

  const [selectedYear, setSelectedYear] = useState(Object.keys(patents)[0]);

  return (
    
    <div className="main-page">
      
        <ResearchSidebar/>
     

      <div className="year-selector">
        {Object.keys(patents).map((year) => (
          <button key={year} onClick={() => setSelectedYear(year)}>
            {year}
          </button>
        ))}
      </div>

      <h2>{selectedYear} Patents</h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Inventor</th>
            <th>Patent Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {patents[selectedYear].map((patent, index) => (
            <tr key={index}>
              <td>{patent.title}</td>
              <td>{patent.inventor}</td>
              <td>{patent.patentNumber}</td>
              <td>{patent.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatentsPage;
