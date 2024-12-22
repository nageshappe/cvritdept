import React, { useState } from 'react';

const FDPsPage = () => {
  const fdps = {
    2023: [
      { title: 'FDP on AI and Machine Learning', date: 'Jan 2023', organizer: 'IIT Madras' },
      { title: 'FDP on Cloud Computing', date: 'March 2023', organizer: 'NIT Trichy' },
    ],
    2022: [
      { title: 'FDP on Cybersecurity', date: 'April 2022', organizer: 'IISC Bangalore' },
      { title: 'FDP on Big Data Analytics', date: 'July 2022', organizer: 'IIT Delhi' },
    ],
    // Add more FDPs here
  };

  const [selectedYear, setSelectedYear] = useState(Object.keys(fdps)[0]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="fdps-page">
      <h1>Faculty Development Programs (FDPs)</h1>
      
      <div className="year-selector">
        {Object.keys(fdps).map((year) => (
          <button key={year} onClick={() => handleYearChange(year)}>
            {year}
          </button>
        ))}
      </div>
      
      <h2>{selectedYear} FDPs</h2>
      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Organizer</th>
          </tr>
        </thead>
        <tbody>
          {fdps[selectedYear].map((fdp, index) => (
            <tr key={index}>
              <td>{fdp.title}</td>
              <td>{fdp.date}</td>
              <td>{fdp.organizer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FDPsPage;
