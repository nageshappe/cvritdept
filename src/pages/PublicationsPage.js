import React, { useState } from 'react';
import publicationsdata from '../data/publications.json';
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
      
      <div className='main-content'>
      <div className="year-select">
         {Object.keys(publicationsdata.publicationsdata).map((year)=>(
            <button className="btn btn-info"  value={year} onClick={handleYearChange}>{year}</button>
         ))}
        
      </div>  
      <h2 align="center">{selectedYear} Publications</h2>
      
        <table className="table table-bordered border-primary">
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
