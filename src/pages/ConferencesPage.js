import React, { useState } from 'react';
import papers from '../data/conferences.json'
import ResearchSidebar from '../components/ResearchSidebar';
const ConferencesPage = () => {
    const [selectedYear, setSelectedYear] = useState(Object.keys(papers.papers)[0]);
    const filteredPapers = papers.papers[selectedYear] || []

    return (
        <div className="main-page">
            <ResearchSidebar />


            <div className='main-content'>
                <div className="year-selector">
                    {Object.keys(papers.papers).map((year) => (
                        <button className="btn btn-info" key={year} onClick={() => setSelectedYear(year)}>
                            {year}
                        </button>

                    ))}
                </div>
                <h2 align="center">{selectedYear} Conferences</h2>
      
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>S.No</th>
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
                        {filteredPapers.map((conf, index) => (
                            <tr key={index}>
                                <td>{conf["S.No"]}</td>
                                 <td>{conf["Faculty Name"]}</td>
                                 <td>{conf["Conference Name"]}</td>
                                 <td>{conf["Year & Month of Publication"]}</td>
                                 <td>{conf["Volume No., Issue No., Pages"]}</td>
                                 <td>{conf["Title"]}</td>
                                 <td>{conf["Authors"]}</td>
                                 <td>{conf["Indexing"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ConferencesPage;
