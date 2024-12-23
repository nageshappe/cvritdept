import React, { useState } from 'react';
import StudentSidebar from "../components/StudentSidebar";
import "../components/Research.css"
import workshops from "./workshops.json"

const StudentsWorkshopsPage= () => {

  const [selectedYear, setSelectedYear] = useState(Object.keys(workshops.workshops)[0]);
//   const [selectedYear, setSelectedYear] = useState('2023');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="main-page">
      <StudentSidebar/>
      <div className="main-content">
      <h1>WorkShops</h1>
      
      <div className="year-selector">
        {Object.keys(workshops.workshops).map((year) => (
          <button  className={`btn btn-primary mr-10 ${selectedYear === year ? 'active' : ''}`} key={year} onClick={() => handleYearChange(year)}>
            {year}
          </button>
        ))}
      </div>
      
      <h2 align="center">{selectedYear} Workshops</h2>
      
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Workshop Name</th>
            <th>Dates</th>
            <th>Resource Persons</th>
            <th>Banner</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {workshops.workshops[selectedYear].map((workshop, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{workshop["Description"]}</td>
              <td>{workshop["Dates"]}</td>
              <td>{workshop["Resource Persons"]}</td>
              <td>{workshop["Banner"]}</td>
              <td>{workshop["Place"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default StudentsWorkshopsPage;
