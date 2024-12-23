// export default CourseOutcomes;
import React, { useState } from 'react';
// Static import of JSON file
import courseOutcomesData from './cosData.json';
import Sidebar from '../components/Sidebar';

const CourseOutcomes = () => {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All'); // Default to 'All'

  // Use the imported JSON data directly
  const courseOutcomes = courseOutcomesData;

  // Handle semester selection change
  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setSelectedSubject('All'); // Reset subject selection to 'All' when semester changes
  };

  // Handle subject selection change
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  // Get the available semesters from the JSON data
  const getSemesters = () => {
    return Object.keys(courseOutcomes);
  };

  // Get the subjects available for the selected semester
  const getSubjects = () => {
    if (selectedSemester) {
      return ['All', ...Object.keys(courseOutcomes[selectedSemester])]; // Include 'All' option
    }
    return [];
  };

  // Get course outcomes for all subjects in the selected semester or a specific subject
  const getCourseOutcomes = () => {
    if (selectedSemester && selectedSubject !== 'All') {
      // Return outcomes for a specific subject
      return { [selectedSubject]: courseOutcomes[selectedSemester][selectedSubject] };
    } else if (selectedSemester) {
      // Return outcomes for all subjects in the selected semester
      return courseOutcomes[selectedSemester];
    }
    return null;
  };

  return (
    <div className='main-page'>
        <Sidebar/>
      
      {/* Semester Selection */}
      

        
      {/* Display Course Outcomes */}
      <div className="main-content">
      
      <label>Select Semester: </label>
        <select value={selectedSemester} onChange={handleSemesterChange}>
          <option value="">Select Semester</option>
          {getSemesters().map((semester) => (
            <option key={semester} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      

      {/* Subject Selection */}
      {selectedSemester && (
        <>
          <label>Select Subject: </label>
          <select value={selectedSubject} onChange={handleSubjectChange}>
            {getSubjects().map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </>
      )}

        {selectedSemester && (
          <div>
            <h3>
              {selectedSubject !== 'All'
                ? `Course Outcomes for ${selectedSubject}:`
                : `Course Outcomes for all subjects in ${selectedSemester}:`}
            </h3>

            {getCourseOutcomes() &&
              Object.entries(getCourseOutcomes()).map(([subject, outcomes]) => (
                <div key={subject}>
                  <h4>{subject}</h4>
                  <ul>
                    {Object.entries(outcomes).map(([co, description]) => (
                      <li key={co}>
                        <strong>{co}:</strong> {description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseOutcomes;
