import React, { useState } from 'react';
import ResearchPage from './ResearchPage';
import ResearchSidebar from '../components/ResearchSidebar';
import Patentsdata from "../data/patents.json"

const PatentsPage = () => {

    const [selectedYear, setSelectedYear] = useState(Object.keys(Patentsdata.patent_data)[0]);
    const patents = Patentsdata.patent_data[selectedYear] || [];
    return (

        <div className="main-page">

            <ResearchSidebar />

            <div className='main-content'>
   
            <div className="year-selector">
                {Object.keys(Patentsdata.patent_data).map((year) => (
                    <button className="btn btn-info" key={year} onClick={() => setSelectedYear(year)}>
                        {year}
                    </button>
                ))}
            </div>
            <h2 align="center">{selectedYear} Patents</h2>
      
                <table className='table table-bordered '>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Year</th>
                            <th>Patent Details</th>
                            <th>Inventor</th>
                            <th>Year of Application</th>
                            <th>Patent Status</th>
                            <th>Patent Number</th>
                            <th>Date of Published/Granted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patents.map((patent, index) => (
                            <tr key={index} className="publication-card">
                                <td>{index + 1}</td>
                                <td>{patent["Academic Year"]}</td>
                                <td>{patent["Patent Details"]}</td>
                                <td>{patent["Name of the Faculty"]}</td>
                                <td>{patent["Year of Application"]}</td>
                                <td>{patent["Patent status"]}</td>
                                <td>{patent["Patent Number"]}</td>
                                <td>{patent["Date of Published/ Award / Filed"]}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatentsPage;
