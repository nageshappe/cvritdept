import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
const PEOsPage = () => {
  return (
    <div className='main-page'>
      <Sidebar />
      <div className="main-content">
      <h2>Program Educational Objectives (PEOs)</h2>

<table>
    <thead>
        <tr>
            <th>PEO Number</th>
            <th>Program Educational Objective</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PEO 1</td>
            <td>Graduates will acquire the capability to apply their knowledge and skills to solve various kinds of computational engineering problems.</td>
        </tr>
        <tr>
            <td>PEO 2</td>
            <td>Graduates will be in a position to recognize and incorporate societal needs and practice their profession with high regard to legal and ethical practices.</td>
        </tr>
        <tr>
            <td>PEO 3</td>
            <td>Graduates will be ready to work on projects related to complex problems involving multi-disciplinary areas.</td>
        </tr>
        <tr>
            <td>PEO 4</td>
            <td>To evolve as resourceful engineers catering to global changes and engage in life-long learning.</td>
        </tr>
        <tr>
            <td>PEO 5</td>
            <td>To enable the students with required soft skills that can be used in a pragmatic manner and excel in diverse environments in the competitive world.</td>
        </tr>
    </tbody>
</table>
      </div>
    </div>
  );
};

export default PEOsPage;
