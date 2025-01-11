// import React, { useState } from 'react';
// import publicationsdata from '../data/publications.json';
// import ResearchSidebar from '../components/ResearchSidebar';

// const PublicationsPage = () => {
//   const [selectedYear, setSelectedYear] = useState('2024'); // Default year

//   // Function to handle year change
//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   // Filter publications based on selected year
//   const filteredPublications = publicationsdata.publicationsdata[selectedYear] || [];

//   return (
//     <div className="main-page">
//      <ResearchSidebar/>     

//       <div className='main-content'>
//       <div className="year-select">
//          {Object.keys(publicationsdata.publicationsdata).map((year)=>(
//             <button className="btn btn-info"  value={year} onClick={handleYearChange}>{year}</button>
//          ))}

//       </div>  
//       <h2 align="center">{selectedYear} Publications</h2>

//         <table className="table table-bordered border-primary">
//             <tr><th>S.No</th>
//                  <th>Faculty Name</th>
//                 <th>Title of Publication </th>
//                 <th>Indexing</th>
//                 <th>Journal Name</th>
//                 <th>Month & Year</th>
//             </tr>
//         {filteredPublications.length > 0 ? (
//           filteredPublications.map((publication, index) => (
//             <tr key={index} className="publication-card">
//                 <td>{index+1}</td>
//               <td>{publication["Name of the Faculty"]}</td>
//               <td>{publication["Title of Publication / Paper"]}</td>
//               <td> {publication["Indexing (Scopus/ DBLP/ SCI)"]}</td>
//               <td> {publication["Venue/Place Or Publications"]}</td>
//               <td> {publication.Year}</td>
//             </tr>
//           ))
//         ) : (
//           <p>No publications available for {selectedYear}</p>
//         )}
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PublicationsPage;


import React, { useState } from 'react';
import ResearchSidebar from '../components/ResearchSidebar';
import "../css/Research.css";
import PublicationsData from "../data/publications.json";

const PublicationsPage = () => {
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedFaculty, setSelectedFaculty] = useState(null); // Track selected faculty for detail view
  const [showAllPublications, setShowAllPublications] = useState(false); // Track if all Publications for the year should be shown
  const [showGrandTotalPublications, setShowGrandTotalPublications] = useState(false); // Track if grand total Publications should be shown
  const [showTable, setShowTable] = useState(true); // Toggle display between faculty list and full FDP list

  // Get the unique faculty list
  const facultyList = [...new Set(Object.values(PublicationsData.publicationsdata).flat().map(publication => publication["Name of the Faculty"]))];

  // Function to get the total count of Publications for each year
  const getYearwiseTotalCount = () => {
    const yearwiseTotal = {};
    Object.entries(PublicationsData.publicationsdata).forEach(([year, publicationList]) => {
      yearwiseTotal[year] = publicationList.length;
    });
    return yearwiseTotal;
  };
  // Get faculty-wise Publication count for all years
  const getFacultyPublicationCountForAllYears = (faculty) => {
    const yearCounts = {};
    Object.keys(PublicationsData.publicationsdata).forEach(year => {
      yearCounts[year] = PublicationsData.publicationsdata[year].filter(publication => publication["Name of the Faculty"] === faculty).length;
    });
    return yearCounts;
  };

  // Get grand total Publications count for each faculty across all years
  const getFacultyGrandTotalPublicationCount = () => {
    const facultyPublicationCount = {};
    facultyList.forEach(faculty => {
      facultyPublicationCount[faculty] = Object.keys(PublicationsData.publicationsdata).reduce((acc, year) => {
        return acc + PublicationsData.publicationsdata[year].filter(publication => publication["Name of the Faculty"] === faculty).length;
      }, 0);
    });
    return facultyPublicationCount;
  };

  // Function to show all Publications for the selected year
  const handleShowAllPublicationsForYear = (year) => {
    setSelectedYear(year);
    setSelectedFaculty(null);
    setShowAllPublications(true); // Show the full FDP list for the year
    setShowGrandTotalPublications(false);
    setShowTable(false); // Hide the faculty list and show the yearwise Publications
  };

  // Function to show Publications for a specific faculty
  const handleShowPublicationsForFacultyInYear = (faculty, year) => {
    setSelectedFaculty(faculty);
    setSelectedYear(year);
    setShowAllPublications(false);
    setShowGrandTotalPublications(false);
    setShowTable(false); // Hide the faculty list and show the Publications for selected faculty
  };

  // Function to show grand total Publications for selected faculty
  const handleShowGrandTotalPublications = (faculty) => {
    setSelectedFaculty(faculty);
    setShowAllPublications(false);
    setSelectedYear(null)
    setShowGrandTotalPublications(true);
    setShowTable(false);
  };

  // Function to go back to faculty list
  const handleBackToFacultyList = () => {
    setShowTable(true);
    setShowAllPublications(false);
    setShowGrandTotalPublications(false);
  };

  const facultyGrandTotalPublicationCount = getFacultyGrandTotalPublicationCount();

  return (
    <div className="main-page">
      <ResearchSidebar />
      <div className="main-content">
        <h1> Faculty Publications(Journals)</h1>

        {/* Year buttons */}
        <div className="year-selector">
          {Object.keys(PublicationsData.publicationsdata).map((year) => (
            <button
              className={`btn btn-primary mr-10 ${selectedYear === year ? 'active' : ''}`}
              key={year}
              onClick={() => handleShowAllPublicationsForYear(year)} // Show all Publications for the selected year
            >
              {year}
            </button>
          ))}
        </div>

        {/* Toggle between faculty list and yearwise Publications */}
        {showTable ? (
          <div>
            {/* Display the list of faculty and their year-wise FDP counts */}
            <h3>Faculty List</h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Faculty Name</th>
                  {Object.keys(PublicationsData.publicationsdata).map(year => (
                    <th key={year}> {year}</th>
                  ))}
                  <th>Grand Total Publications</th>
                </tr>
              </thead>
              <tbody>
                {facultyList.map((faculty, index) => {
                  const yearwiseCounts = getFacultyPublicationCountForAllYears(faculty);
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{faculty}</td>
                      {Object.keys(PublicationsData.publicationsdata).map(year => (
                        <td key={year}>
                          <a href="#" className="fs-5 text-decoration-none" onClick={() => handleShowPublicationsForFacultyInYear(faculty, year)}>
                            {yearwiseCounts[year]}
                          </a>
                        </td>
                      ))}
                      <td>
                        <a href="#" className="fs-5 text-decoration-none" onClick={() => handleShowGrandTotalPublications(faculty)}>
                          {facultyGrandTotalPublicationCount[faculty]}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}><strong>Total Publications</strong></td>
                  {Object.keys(PublicationsData.publicationsdata).map((year) => (
                    <td key={year}>
                      <strong>{getYearwiseTotalCount()[year]}</strong>
                    </td>
                  ))}
                  <td>
                    <strong>
                      {Object.values(getYearwiseTotalCount()).reduce((acc, count) => acc + count, 0)}
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <div>
            {/* Display a button to go back to the faculty list */}
            <button className="btn btn-secondary" onClick={handleBackToFacultyList}>
              Back to Faculty List
            </button>
            {selectedFaculty && selectedYear && (
              <div>
                <h3>Publications by {selectedFaculty} in {selectedYear}</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr><th>S.No</th>
                      {/* <th>Faculty Name</th> */}
                      <th>Title of Publication </th>
                      <th>Indexing</th>
                      <th>Journal Name</th>
                      <th>Month & Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PublicationsData.publicationsdata[selectedYear]
                      .filter(publication => publication["Name of the Faculty"] === selectedFaculty)
                      .map((publication, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          {/* <td>{publication["Name of the Faculty"]}</td> */}
                          <td>{publication["Title of Publication / Paper"]}</td>
                          <td> {publication["Indexing (Scopus/ DBLP/ SCI)"]}</td>
                          <td> {publication["Venue/Place Or Publications"]}</td>
                          <td> {publication.Year}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Show all Publications for the selected year */}
            {showAllPublications && (
              <div>
                <h3>Publications  in {selectedYear}</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr><th>S.No</th>
                      <th>Faculty Name</th>
                      <th>Title of Publication </th>
                      <th>Indexing</th>
                      <th>Journal Name</th>
                      <th>Month & Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PublicationsData.publicationsdata[selectedYear].map((publication, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{publication["Name of the Faculty"]}</td>
                        <td>{publication["Title of Publication / Paper"]}</td>
                        <td> {publication["Indexing (Scopus/ DBLP/ SCI)"]}</td>
                        <td> {publication["Venue/Place Or Publications"]}</td>
                        <td> {publication.Year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Display grand total Publications for selected faculty */}
            {showGrandTotalPublications && selectedFaculty && (
              <div>
                <h3>Publications  by {selectedFaculty} in All Years</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Year</th>
                      {/* <th>Faculty Name</th> */}
                      <th>Title of Publication </th>
                      <th>Indexing</th>
                      <th>Journal Name</th>
                      <th>Month & Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(PublicationsData.publicationsdata).map((year, yearIndex) =>
                      PublicationsData.publicationsdata[year]
                        .filter(publication => publication["Name of the Faculty"] === selectedFaculty)
                        .map((publication, index) => (
                          <tr key={`${yearIndex}-${index}`}>
                            <td>{index + 1}</td>
                            <td>{year}</td>
                            {/* <td>{publication["Name of the Fcaulty"]}</td> */}
                            <td>{publication["Title of Publication / Paper"]}</td>
                            <td> {publication["Indexing (Scopus/ DBLP/ SCI)"]}</td>
                            <td> {publication["Venue/Place Or Publications"]}</td>
                            <td> {publication.Year}</td>
                          </tr>
                        ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicationsPage;
