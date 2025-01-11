// import React, { useState } from 'react';
// import ResearchSidebar from '../components/ResearchSidebar';
// import "../css/Research.css"
// import fdps from  "../data/fdps.json"
// const FDPsPage = () => {

//   const [selectedYear, setSelectedYear] = useState(Object.keys(fdps.faculty_workshops)[0]);
//   // const [selectedYear, setSelectedYear] = useState('2023');

//   const handleYearChange = (year) => {
//     setSelectedYear(year);
//   };

//   return (
//     <div className="main-page">
//       <ResearchSidebar/>
//       <div className="main-content">
//       <h1>Faculty Development Programs (FDPs)</h1>

//       <div className="year-selector">
//         {Object.keys(fdps.faculty_workshops).map((year) => (
//           <button  className={`btn btn-primary mr-10 ${selectedYear === year ? 'active' : ''}`} key={year} onClick={() => handleYearChange(year)}>
//             {year}
//           </button>
//         ))}
//       </div>

//       <h2 align="center">{selectedYear} FDPs</h2>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Faculty Name</th>
//             <th>FDP Name</th>
//             <th>Organizing Institute</th>
//             <th>Duration</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fdps.faculty_workshops[selectedYear].map((fdp, index) => (
//             <tr key={index}>
//               <td>{index+1}</td>
//               <td>{fdp["Name_of_the_Faculty"]}</td>
//               <td>{fdp["Name_of_the_Conference/FDP/Workshop_attended"]}</td>
//               <td>{fdp["Organizing_Institute"]}</td>
//               <td>{fdp["Duration_(dates)"]}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   );
// };

// export default FDPsPage;
import React, { useState } from 'react';
import ResearchSidebar from '../components/ResearchSidebar';
import "../css/Research.css";
import fdps from "../data/fdps.json";

const FDPsPage = () => {
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedFaculty, setSelectedFaculty] = useState(null); // Track selected faculty for detail view
  const [showAllFDPs, setShowAllFDPs] = useState(false); // Track if all FDPs for the year should be shown
  const [showGrandTotalFDPs, setShowGrandTotalFDPs] = useState(false); // Track if grand total FDPs should be shown
  const [showTable, setShowTable] = useState(true); // Toggle display between faculty list and full FDP list

  // Get the unique faculty list
  const facultyList = [...new Set(Object.values(fdps.faculty_workshops).flat().map(fdp => fdp["Name_of_the_Faculty"]))];

  // Function to get the total count of FDPs for each year
  const getYearwiseTotalCount = () => {
    const yearwiseTotal = {};
    Object.entries(fdps.faculty_workshops).forEach(([year, fdpList]) => {
      yearwiseTotal[year] = fdpList.length;
    });
    return yearwiseTotal;
  };
  // Get faculty-wise FDP count for all years
  const getFacultyFDPCountForAllYears = (faculty) => {
    const yearCounts = {};
    Object.keys(fdps.faculty_workshops).forEach(year => {
      yearCounts[year] = fdps.faculty_workshops[year].filter(fdp => fdp["Name_of_the_Faculty"] === faculty).length;
    });
    return yearCounts;
  };

  // Get grand total FDP count for each faculty across all years
  const getFacultyGrandTotalFDPCount = () => {
    const facultyFDPCount = {};
    facultyList.forEach(faculty => {
      facultyFDPCount[faculty] = Object.keys(fdps.faculty_workshops).reduce((acc, year) => {
        return acc + fdps.faculty_workshops[year].filter(fdp => fdp["Name_of_the_Faculty"] === faculty).length;
      }, 0);
    });
    return facultyFDPCount;
  };

  // Function to show all FDPs for the selected year
  const handleShowAllFDPsForYear = (year) => {
    setSelectedYear(year);
    setSelectedFaculty(null);
    setShowAllFDPs(true); // Show the full FDP list for the year
    setShowGrandTotalFDPs(false);
    setShowTable(false); // Hide the faculty list and show the yearwise FDPs
  };

  // Function to show FDPs for a specific faculty
  const handleShowFDPsForFacultyInYear = (faculty, year) => {
    setSelectedFaculty(faculty);
    setSelectedYear(year);
    setShowAllFDPs(false);
    setShowGrandTotalFDPs(false);
    setShowTable(false); // Hide the faculty list and show the FDPs for selected faculty
  };

  // Function to show grand total FDPs for selected faculty
  const handleShowGrandTotalFDPs = (faculty) => {
    setSelectedFaculty(faculty);
    setShowAllFDPs(false);
    setSelectedYear(null)
    setShowGrandTotalFDPs(true);
    setShowTable(false);
  };

  // Function to go back to faculty list
  const handleBackToFacultyList = () => {
    setShowTable(true);
    setShowAllFDPs(false);
    setShowGrandTotalFDPs(false);
  };

  const facultyGrandTotalFDPCount = getFacultyGrandTotalFDPCount();

  return (
    <div className="main-page">
      <ResearchSidebar />
      <div className="main-content">
        <h1>Faculty Development Programs (FDPs)</h1>

        {/* Year buttons */}
        <div className="year-selector">
          {Object.keys(fdps.faculty_workshops).map((year) => (
            <button
              className={`btn btn-primary mr-10 ${selectedYear === year ? 'active' : ''}`}
              key={year}
              onClick={() => handleShowAllFDPsForYear(year)} // Show all FDPs for the selected year
            >
              {year}
            </button>
          ))}
        </div>

        {/* Toggle between faculty list and yearwise FDPs */}
        {showTable ? (
          <div>
            {/* Display the list of faculty and their year-wise FDP counts */}
            <h3>Faculty List</h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Faculty Name</th>
                  {Object.keys(fdps.faculty_workshops).map(year => (
                    <th key={year}> {year}</th>
                  ))}
                  <th>Grand Total FDPs</th>
                </tr>
              </thead>
              <tbody>
                {facultyList.map((faculty, index) => {
                  const yearwiseCounts = getFacultyFDPCountForAllYears(faculty);
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{faculty}</td>
                      {Object.keys(fdps.faculty_workshops).map(year => (
                        <td key={year}>
                          <a href="#" className="fs-5 text-decoration-none" onClick={() => handleShowFDPsForFacultyInYear(faculty, year)}>
                            {yearwiseCounts[year]}
                          </a>
                        </td>
                      ))}
                      <td>
                        <a href="#" className="fs-5 text-decoration-none" onClick={() => handleShowGrandTotalFDPs(faculty)}>
                          {facultyGrandTotalFDPCount[faculty]}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}><strong>Total FDPs</strong></td>
                  {Object.keys(fdps.faculty_workshops).map((year) => (
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
                <h3>FDPs Attended by {selectedFaculty} in {selectedYear}</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>FDP Name</th>
                      <th>Organizing Institute</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fdps.faculty_workshops[selectedYear]
                      .filter(fdp => fdp["Name_of_the_Faculty"] === selectedFaculty)
                      .map((fdp, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{fdp["Name_of_the_Conference/FDP/Workshop_attended"]}</td>
                          <td>{fdp["Organizing_Institute"]}</td>
                          <td>{fdp["Duration_(dates)"]}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Show all FDPs for the selected year */}
            {showAllFDPs && (
              <div>
                <h3>FDPs Attended in {selectedYear}</h3>
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
                        <td>{index + 1}</td>
                        <td>{fdp["Name_of_the_Faculty"]}</td>
                        <td>{fdp["Name_of_the_Conference/FDP/Workshop_attended"]}</td>
                        <td>{fdp["Organizing_Institute"]}</td>
                        <td>{fdp["Duration_(dates)"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Display grand total FDPs for selected faculty */}
            {showGrandTotalFDPs && selectedFaculty && (
              <div>
                <h3>FDPs Attended by {selectedFaculty} in All Years</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Year</th>
                      <th>FDP Name</th>
                      <th>Organizing Institute</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(fdps.faculty_workshops).map((year, yearIndex) =>
                      fdps.faculty_workshops[year]
                        .filter(fdp => fdp["Name_of_the_Faculty"] === selectedFaculty)
                        .map((fdp, index) => (
                          <tr key={`${yearIndex}-${index}`}>
                            <td>{index + 1}</td>
                            <td>{year}</td>
                            <td>{fdp["Name_of_the_Conference/FDP/Workshop_attended"]}</td>
                            <td>{fdp["Organizing_Institute"]}</td>
                            <td>{fdp["Duration_(dates)"]}</td>
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

export default FDPsPage;
