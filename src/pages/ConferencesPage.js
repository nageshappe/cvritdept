// import React, { useState } from 'react';
// import papers from '../data/conferences.json'
// import ResearchSidebar from '../components/ResearchSidebar';
// const ConferencesPage = () => {
//     const [selectedYear, setSelectedYear] = useState(Object.keys(papers.papers)[0]);
//     const filteredPapers = papers.papers[selectedYear] || []

//     return (
//         <div className="main-page">
//             <ResearchSidebar />


//             <div className='main-content'>
//                 <div className="year-selector">
//                     {Object.keys(papers.papers).map((year) => (
//                         <button className="btn btn-info" key={year} onClick={() => setSelectedYear(year)}>
//                             {year}
//                         </button>

//                     ))}
//                 </div>
//                 <h2 align="center">{selectedYear} Conferences</h2>

//                 <table className='table table-bordered'>
//                     <thead>
//                         <tr>
//                             <th>S.No</th>
//                             <th>Faculty Name</th>
//                             <th>Conference Name</th>
//                             <th>Year & Month</th>
//                             <th>Volumne No.</th>
//                             <th>Title</th>
//                             <th>Authors</th>
//                             <th>Indexing</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredPapers.map((conf, index) => (
//                             <tr key={index}>
//                                 <td>{conf["S.No"]}</td>
//                                  <td>{conf["Faculty Name"]}</td>
//                                  <td>{conf["Conference Name"]}</td>
//                                  <td>{conf["Year & Month of Conference"]}</td>
//                                  <td>{conf["Volume No., Issue No., Pages"]}</td>
//                                  <td>{conf["Title"]}</td>
//                                  <td>{conf["Authors"]}</td>
//                                  <td>{conf["Indexing"]}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//         </div>
//     );
// };

// export default ConferencesPage;
import React, { useState } from 'react';
import ResearchSidebar from '../components/ResearchSidebar';
import "../css/Research.css";
import conferencesData from "../data/conferences.json";

const ConferencesPage = () => {
    const [selectedYear, setSelectedYear] = useState('2023');
    const [selectedFaculty, setSelectedFaculty] = useState(null); // Track selected faculty for detail view
    const [showAllConferences, setShowAllConferences] = useState(false); // Track if all Conferences for the year should be shown
    const [showGrandTotalConferences, setShowGrandTotalConferences] = useState(false); // Track if grand total Conferences should be shown
    const [showTable, setShowTable] = useState(true); // Toggle display between faculty list and full FDP list

    // Get the unique faculty list
    const facultyList = [...new Set(Object.values(conferencesData.papers).flat().map(conference => conference["Name of the Faculty"]))];

    // Function to get the total count of Conferences for each year
    const getYearwiseTotalCount = () => {
        const yearwiseTotal = {};
        Object.entries(conferencesData.papers).forEach(([year, conferenceList]) => {
            yearwiseTotal[year] = conferenceList.length;
        });
        return yearwiseTotal;
    };
    // Get faculty-wise Conference count for all years
    const getFacultyConferenceCountForAllYears = (faculty) => {
        const yearCounts = {};
        Object.keys(conferencesData.papers).forEach(year => {   
            yearCounts[year] = conferencesData.papers[year].filter(conference => conference["Name of the Faculty"] === faculty).length;
        });
        return yearCounts;
    };

    // Get grand total Conferences count for each faculty across all years
    const getFacultyGrandTotalConferenceCount = () => {
        const facultyConferenceCount = {};
        facultyList.forEach(faculty => {
            facultyConferenceCount[faculty] = Object.keys(conferencesData.papers).reduce((acc, year) => {
                return acc + conferencesData.papers[year].filter(conference => conference["Name of the Faculty"] === faculty).length;
            }, 0);
        });
        return facultyConferenceCount;
    };

    // Function to show all Conferences for the selected year
    const handleShowAllConferencesForYear = (year) => {
        setSelectedYear(year);
        setSelectedFaculty(null);
        setShowAllConferences(true); // Show the full FDP list for the year
        setShowGrandTotalConferences(false);
        setShowTable(false); // Hide the faculty list and show the yearwise Conferences
    };

    // Function to show Conferences for a specific faculty
    const handleShowConferencesForFacultyInYear = (faculty, year) => {
        setSelectedFaculty(faculty);
        setSelectedYear(year);
        setShowAllConferences(false);
        setShowGrandTotalConferences(false);
        setShowTable(false); // Hide the faculty list and show the Conferences for selected faculty
    };

    // Function to show grand total Conferences for selected faculty
    const handleShowGrandTotalConferences = (faculty) => {
        setSelectedFaculty(faculty);
        setShowAllConferences(false);
        setSelectedYear(null)
        setShowGrandTotalConferences(true);
        setShowTable(false);
    };

    // Function to go back to faculty list
    const handleBackToFacultyList = () => {
        setShowTable(true);
        setShowAllConferences(false);
        setShowGrandTotalConferences(false);
    };

    const facultyGrandTotalConferenceCount = getFacultyGrandTotalConferenceCount();

    return (
        <div className="main-page">
            <ResearchSidebar />
            <div className="main-content">
                <h1> Faculty Conferences</h1>

                {/* Year buttons */}
                <div className="year-selector">
                    {Object.keys(conferencesData.papers).map((year) => (
                        <button
                            className={`btn btn-primary mr-10 ${selectedYear === year ? 'active' : ''}`}
                            key={year}
                            onClick={() => handleShowAllConferencesForYear(year)} // Show all Conferences for the selected year
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Toggle between faculty list and yearwise Conferences */}
                {showTable ? (
                    <div>
                        {/* Display the list of faculty and their year-wise FDP counts */}
                        <h3>Faculty List</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Faculty Name</th>
                                    {Object.keys(conferencesData.papers).map(year => (
                                        <th key={year}> {year}</th>
                                    ))}
                                    <th>Grand Total Conferences</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facultyList.map((faculty, index) => {
                                    const yearwiseCounts = getFacultyConferenceCountForAllYears(faculty);
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{faculty}</td>
                                            {Object.keys(conferencesData.papers).map(year => (
                                                <td key={year}>
                                                    <a href="#" className="fs-5 text-decoration-none" onClick={() => handleShowConferencesForFacultyInYear(faculty, year)}>
                                                        {yearwiseCounts[year]}
                                                    </a>
                                                </td>
                                            ))}
                                            <td>
                                                <a href="#" className="fs-5 text-decoration-none" onClick={() => handleShowGrandTotalConferences(faculty)}>
                                                    {facultyGrandTotalConferenceCount[faculty]}
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={2}><strong>Total Conferences</strong></td>
                                    {Object.keys(conferencesData.papers).map((year) => (
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
                                <h3>Conferences by {selectedFaculty} in {selectedYear}</h3>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr><th>S.No</th>
                                            {/* <th>Faculty Name</th> */}
                                            <th>Conference Name</th>
                                            <th>Year & Month</th>
                                            <th>Volumne No.</th>
                                            <th>Title</th>
                                            <th>Authors</th>
                                            <th>Indexing</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {conferencesData.papers[selectedYear]
                                            .filter(conference => conference["Name of the Faculty"] === selectedFaculty)
                                            .map((conference, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    {/* <td>{conference["Name of the Faculty"]}</td> */}
                                                    <td>{conference["Conference Name"]}</td>
                                                    <td> {conference["Year & Month of Publication"]}</td>
                                                    <td> {conference["Volume No., Issue No., Pages"]}</td>
                                                    <td> {conference["Title"]}</td>
                                                    <td> {conference["Authors"]}</td>
                                                    <td> {conference["Indexing"]}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Show all Conferences for the selected year */}
                        {showAllConferences && (
                            <div>
                                <h3>Conferences Attended in {selectedYear}</h3>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr><th>S.No</th>
                                            <th>Faculty Name</th>
                                            <th>Conference Name</th>
                                            <th>Year & Month</th>
                                            <th>Volumne No.</th>
                                            <th>Title</th>
                                            <th>Authors</th>
                                            <th>Indexing</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {conferencesData.papers[selectedYear].map((conference, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{conference["Name of the Faculty"]}</td>
                                                <td>{conference["Conference Name"]}</td>
                                                    <td> {conference["Year & Month of Publication"]}</td>
                                                    <td> {conference["Volume No., Issue No., Pages"]}</td>
                                                    <td> {conference["Title"]}</td>
                                                    <td> {conference["Authors"]}</td>
                                                    <td> {conference["Indexing"]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Display grand total Conferences for selected faculty */}
                        {showGrandTotalConferences && selectedFaculty && (
                            <div>
                                <h3>Conferences  by {selectedFaculty} in All Years</h3>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Year</th>
                                            {/* <th>Faculty Name</th> */}
                                            <th>Conference Name</th>
                                            <th>Year & Month</th>
                                            <th>Volumne No.</th>
                                            <th>Title</th>
                                            <th>Authors</th>
                                            <th>Indexing</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(conferencesData.papers).map((year, yearIndex) =>
                                            conferencesData.papers[year]
                                                .filter(conference => conference["Name of the Faculty"] === selectedFaculty)
                                                .map((conference, index) => (
                                                    <tr key={`${yearIndex}-${index}`}>
                                                        <td>{index + 1}</td>
                                                        <td>{year}</td>
                                                        {/* <td>{conference["Name of the Fcaulty"]}</td> */}
                                                        <td>{conference["Conference Name"]}</td>
                                                    <td> {conference["Year & Month of Publication"]}</td>
                                                    <td> {conference["Volume No., Issue No., Pages"]}</td>
                                                    <td> {conference["Title"]}</td>
                                                    <td> {conference["Authors"]}</td>
                                                    <td> {conference["Indexing"]}</td>
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


export default ConferencesPage;