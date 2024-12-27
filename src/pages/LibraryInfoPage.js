import React, { useState } from 'react';
import libraryData from "../data/librarydata.json"
import InfrastructureSidebar from '../components/InfrastructureSidebar';
const LibraryInfoPage = () => {
    const [selectedCourse, setSelectedCourse] = useState('BTech');
    const [selectedType, setSelectedType] = useState('National');

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const selectedData = libraryData[selectedCourse][selectedType];

    return (
        <div className="main-page">
            <InfrastructureSidebar />

            {/* Course Selection */}
            <div className="main-content">
            <h1>Library Information</h1>
                <label>Select Course: </label>
                <select value={selectedCourse} onChange={handleCourseChange}>
                    <option value="BTech">BTech</option>
                    <option value="MTech">MTech</option>
                </select>

                {/* Journal Type Selection (National or International) */}
                    <label>Select Journal Type: </label>
                    <select value={selectedType} onChange={handleTypeChange}>
                        <option value="National">National</option>
                        <option value="International">International</option>
                    </select>
            
                {/* Journal Data Display */}
                <div>
                    <h2>{`${selectedCourse} - ${selectedType} Journals`}</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>SNO</th>
                                <th>Journal Name</th>
                                <th>Periodicity</th>
                                <th>Type (NJ/IJ)</th>
                                <th>SCOPUS/WOS</th>
                                <th>ISSN No</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedData.length > 0 ? (
                                selectedData.map((journal) => (
                                    <tr key={journal.SNO}>
                                        <td>{journal.SNO}</td>
                                        <td>{journal.NAME_OF_THE_JOURNAL}</td>
                                        <td>{journal.PERIODICITY}</td>
                                        <td>{journal.NJ_IJ}</td>
                                        <td>{journal.SCOPUS_WOS}</td>
                                        <td>{journal.ISSN_No}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LibraryInfoPage;
