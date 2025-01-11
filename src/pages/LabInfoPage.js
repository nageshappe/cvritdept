// import React, { useState } from "react";
// import InfrastructureSidebar from "../components/InfrastructureSidebar";


// const LabInfoPage = () => {
//     const labData = {
//         Lab1: "Lab1 Information: This lab focuses on introductory concepts.",
//         Lab2: "Lab2 Information: This lab covers intermediate topics.",
//         Lab3: "Lab3 Information: This lab is an advanced-level course.",
//     };

//     // Step 2: Set up the state to track selected lab
//     const [selectedLab, setSelectedLab] = useState(null);

//     // Step 3: Handle click event to show information
//     const handleLabClick = (lab) => {
//         setSelectedLab(lab);
//     };

//     return (
//         <div className="main-page">
//             <InfrastructureSidebar />
//             <div className="main-content">
//                 <h1>Lab Details</h1>

//                 {/* Step 4: Display the lab labels */}
//                 {Object.keys(labData).map((lab) => (
//                     <button className="btn btn-info mr-10" key={lab} onClick={() => handleLabClick(lab)}>
//                         {lab}
//                     </button>
//                 ))}

//                 {/* Step 5: Display the selected lab's information */}
//                 {selectedLab && (
//                     <div>
//                         <h2>{selectedLab}</h2>
//                         <p>{labData[selectedLab]}</p>
//                     </div>

//                 )}
//             </div>
//         </div>
//     );
// }

// export default LabInfoPage

// src/LabDetailsPage.js

import React, { useState } from "react";
import InfrastructureSidebar from "../components/InfrastructureSidebar";
import labData from "../data/labsdata.json"


// LabInfoPage Component
const LabInfoPage = () => {
    // Step 2: Set up the state to track selected lab
    const [selectedLab, setSelectedLab] = useState(Object.keys(labData.labs)[0]);

    // Step 3: Handle click event to show information
    const handleLabClick = (lab) => {
        setSelectedLab(lab);
    };

    return (
        <div className="main-page">
            <InfrastructureSidebar />
            <div className="main-content">
                <h1>Lab Details</h1>

                {/* Step 4: Display the lab labels */}
                {Object.keys(labData.labs).map((lab) => (

                    <button className="btn btn-info mr-10" key={lab} onClick={() => handleLabClick(lab)}>
                        {lab}
                    </button>
                ))}

                {/* Step 5: Display the selected lab's information */}
                {selectedLab && (

                    <div>
                        <h2>{selectedLab}</h2>
                        <table border="1" cellPadding="10" style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td><strong>Location:</strong></td>
                                    <td>{labData.labs[selectedLab].location}</td>
                                </tr>
                                <tr>
                                    <td><strong>Lab Incharge:</strong></td>
                                    <td>{labData.labs[selectedLab].lab_incharge.join(', ')}</td>
                                </tr>
                                <tr>
                                    <td><strong>Programmer:</strong></td>
                                    <td>{labData.labs[selectedLab].programmer}</td>
                                </tr>

                                <tr>
                                    <td colSpan="2"><h3>Hardware Details</h3></td>
                                </tr>
                                <tr>
                                        <td><strong>Server:</strong></td>
                                    <td>{labData.labs[selectedLab].hardware.server}</td>
                                </tr>
                                <tr>
                                    <td><strong>Server Configuration:</strong></td>
                                    <td>{labData.labs[selectedLab].hardware.server_configuration}</td>
                                </tr>
                                <tr>
                                    <td><strong>Workstations:</strong></td>
                                    <td>{labData.labs[selectedLab].hardware.workstations}</td>
                                </tr>
                                <tr>
                                    <td><strong>Workstation Configuration:</strong></td>
                                    <td>{labData.labs[selectedLab].hardware.workstation_configuration}</td>
                                </tr>
                                <tr>
                                    <td><strong>Printer:</strong></td>
                                    <td>{labData.labs[selectedLab].hardware.printer}</td>
                                </tr>
                                <tr>
                                    <td><strong>Switches:</strong></td>
                                    <td>{labData.labs[selectedLab].hardware.switches}</td>
                                </tr>
                                <tr>
                                    <td><strong>UPS:</strong></td>
                                    <td>{labData.labs[selectedLab].hardware.ups}</td>
                                </tr>
                                <tr>
                                    <td><strong>Air Conditioner:</strong></td>
                                    <td>{labData.labs[selectedLab].hardware.air_conditioner}</td>
                                </tr>
                                <tr>
                                    <td><strong>Projector:</strong></td>
                                    <td>{labData.labs[selectedLab].hardware.projector}</td>
                                </tr>

                                <tr>
                                    <td colSpan="2"><h3>Software Details</h3></td>
                                </tr>
                                <tr>
                                    <td><strong>Operating Systems:</strong></td>
                                    <td>{labData.labs[selectedLab].software.os}</td>
                                </tr>
                                <tr>
                                    <td><strong>Development Tools:</strong></td>
                                    <td>{labData.labs[selectedLab].software.development_tools.join(', ')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                )}
            </div>
        </div>
    );
};

export default LabInfoPage;
