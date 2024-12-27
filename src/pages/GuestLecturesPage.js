import React, { useState } from 'react';
import StudentSidebar from "../components/StudentSidebar";
import "../css/Research.css"
import guestlectures from "../data/GuestLectures.json"

const GuestLecturesPage= () => {

  const [selectedYear, setSelectedYear] = useState(Object.keys(guestlectures.guestlectures)[0]);
//   const [selectedYear, setSelectedYear] = useState('2023');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="main-page">
      <StudentSidebar/>
      <div className="main-content">
      <h1>GuestLectures</h1>
      
      <div className="year-selector">
        {Object.keys(guestlectures.guestlectures).map((year) => (
          <button  className={`btn btn-primary mr-10 ${selectedYear === year ? 'active' : ''}`} key={year} onClick={() => handleYearChange(year)}>
            {year}
          </button>
        ))}
      </div>
      
      <h2 align="center">{selectedYear} Guest LecturesFDPs</h2>
      
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Description</th>
            <th>Dates</th>
            <th>Resource Persons</th>
            <th>Banner</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {guestlectures.guestlectures[selectedYear].map((guestlecture, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{guestlecture["Description"]}</td>
              <td>{guestlecture["Dates"]}</td>
              <td>{guestlecture["Resource Persons"]}</td>
              <td>{guestlecture["Banner"]}</td>
              <td>{guestlecture["Place"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default GuestLecturesPage;
