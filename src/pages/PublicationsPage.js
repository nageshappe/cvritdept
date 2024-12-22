import React, { useState } from 'react';
import publicationsdata from './publications.json';
import ResearchSidebar from '../components/ResearchSidebar';

const PublicationsPage = () => {
  const [selectedYear, setSelectedYear] = useState('2024'); // Default year

  // Function to handle year change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Filter publications based on selected year
  const filteredPublications = publicationsdata.publicationsdata[selectedYear] || [];

  return (
    <div className="main-page">
     <ResearchSidebar/>     
      {/* Dropdown to select year */}
      <div className="year-select">
        <label htmlFor="yearSelect">Select Year: </label>
        <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
          {Object.keys(publicationsdata.publicationsdata).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className='main-content'>
        
      {/* Display publications for the selected year */}
      {/* <div className="publications-list"> */}
        <table className="table table-bordered">
            <tr><th>S.No</th>
                 <th>Faculty Name</th>
                <th>Title of Publication </th>
                <th>Indexing</th>
                <th>Journal Name</th>
                <th>Month & Year</th>
            </tr>
        {filteredPublications.length > 0 ? (
          filteredPublications.map((publication, index) => (
            <tr key={index} className="publication-card">
                <td>{index+1}</td>
              <td>{publication["Name of the Faculty"]}</td>
              <td>{publication["Title of Publication / Paper"]}</td>
              <td> {publication["Indexing (Scopus/ DBLP/ SCI)"]}</td>
              <td> {publication["Venue/Place Or Publications"]}</td>
              <td> {publication.Year}</td>
            </tr>
          ))
        ) : (
          <p>No publications available for {selectedYear}</p>
        )}
        </table>
      </div>
    </div>
  );
};

export default PublicationsPage;
