import React, { useState } from "react";
import InfrastructureSidebar from "../components/InfrastructureSidebar";


const LabInfoPage = () => {
    const labData = {
        Lab1: "Lab1 Information: This lab focuses on introductory concepts.",
        Lab2: "Lab2 Information: This lab covers intermediate topics.",
        Lab3: "Lab3 Information: This lab is an advanced-level course.",
    };

    // Step 2: Set up the state to track selected lab
    const [selectedLab, setSelectedLab] = useState(null);

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
                {Object.keys(labData).map((lab) => (
                    <button className="btn btn-info mr-10" key={lab} onClick={() => handleLabClick(lab)}>
                        {lab}
                    </button>
                ))}

                {/* Step 5: Display the selected lab's information */}
                {selectedLab && (
                    <div>
                        <h2>{selectedLab}</h2>
                        <p>{labData[selectedLab]}</p>
                    </div>
            
        )}
        </div>
        </div>
    );
}

export default LabInfoPage