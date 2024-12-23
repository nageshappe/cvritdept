import React, { useState } from 'react';
import ResearchSidebar from '../components/ResearchSidebar';
import "../components/Research.css"
import fdps from  "./fdps.json"
const FDPsPage = () => {

  // const [selectedYear, setSelectedYear] = useState(Object.keys(fdps.faculty_workshops)[0]);
  const [selectedYear, setSelectedYear] = useState('2023');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="main-page">
      <ResearchSidebar/>
      <div className="main-content">
      <h1>Faculty Development Programs (FDPs)</h1>
      
      <div className="year-selector">
        {Object.keys(fdps.faculty_workshops).map((year) => (
          <button  className={`btn btn-primary mr-10 ${selectedYear === year ? 'active' : ''}`} key={year} onClick={() => handleYearChange(year)}>
            {year}
          </button>
        ))}
      </div>
      
      <h2 align="center">{selectedYear} FDPs</h2>
      
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Faculty Name</th>
            <th>FDP Name</th>
            <th>Organizing Institute</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {fdps.faculty_workshops[selectedYear].map((fdp, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{fdp["Name_of_the_Faculty"]}</td>
              <td>{fdp["Name_of_the_Conference/FDP/Workshop_attended"]}</td>
              <td>{fdp["Organizing_Institute"]}</td>
              <td>{fdp["Duration_(dates)"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default FDPsPage;
