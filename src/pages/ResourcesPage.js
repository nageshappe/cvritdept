// src/ResourcesPage.js
import React from 'react';
import resourcesData from '../data/eresources.json'; // Adjust the path to your data file

const ResourcesPage = () => {

  // Group resources by year and semester
  const groupedResources = resourcesData.reduce((acc, resource) => {
    const yearSemester = resource['Year&Semester'];
    if (!acc[yearSemester]) {
      acc[yearSemester] = [];
    }
    acc[yearSemester].push(resource);
    return acc;
  }, {});

  return (
    <div className="resources-page">
      <h1 className='text-center'>E-Resources</h1>

      {/* Render the table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Year & Semester</th>
            <th>Subject</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedResources).map((yearSemester) => (
            <React.Fragment key={yearSemester}>
              {groupedResources[yearSemester].map((resource, index) => (
                <tr key={resource.Subject}>
                  {/* Only show the Year & Semester once per group */}
                  {index === 0 && (
                    <td rowSpan={groupedResources[yearSemester].length}>
                      {yearSemester}
                    </td>
                  )}
                  <td>{resource.Subject}</td>
                  <td>
                    <ul>
                      {resource['Web-links'].map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={link} target="_blank" rel="noopener noreferrer">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResourcesPage;
