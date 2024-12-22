import React, { useState } from 'react';

const ConferencesPage = () => {
  const conferences = {
    2023: [
      { name: 'International Conference on AI', location: 'Singapore', date: 'Feb 2023' },
      { name: 'National Data Science Conference', location: 'New Delhi', date: 'April 2023' },
    ],
    2022: [
      { name: 'Blockchain Summit', location: 'London', date: 'May 2022' },
      { name: 'Global IoT Conference', location: 'Tokyo', date: 'Sept 2022' },
    ],
    // More conferences year-wise
  };

  const [selectedYear, setSelectedYear] = useState(Object.keys(conferences)[0]);

  return (
    <div className="conferences-page">
      <h1>Conferences</h1>

      <div className="year-selector">
        {Object.keys(conferences).map((year) => (
          <button key={year} onClick={() => setSelectedYear(year)}>
            {year}
          </button>
        ))}
      </div>

      <h2>{selectedYear} Conferences</h2>

      <table>
        <thead>
          <tr>
            <th>Conference Name</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {conferences[selectedYear].map((conf, index) => (
            <tr key={index}>
              <td>{conf.name}</td>
              <td>{conf.location}</td>
              <td>{conf.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConferencesPage;
