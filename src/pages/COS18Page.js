import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './VisionMissionPage.css';
import Sidebar from '../components/Sidebar';

const COS18Page = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);

    const yearData = {
        IYear: {
            "Semester 1": ["Mathematics-I", "Engineering Chemistry", "Problem solving Through 'C'", "Environmental Science", "Engineering Drawing", "English Language and Communications Lab I",
                "Engineering Chemistry Lab", "Computer Programming Lab", "IT Workshop"],
            "Semester 2": ["English", "Mathematics-II", "Computational Mathematics", "Applied Physics", "Data Structures Through 'C'",
                "English Language and Communication Skills Lab-II", "Computational Mathematics Lab", "Applied Physics Lab", "Data Structures Through 'C' Lab", "Engineering WorkShop"],
        },
        // IIYear: {
        //     "Semester 1": ["Subject 5", "Subject 6"],
        //     "Semester 2": ["Subject 7", "Subject 8"],
        // },
        // IIIYear: {
        //     "Semester 1": ["Subject 9", "Subject 10"],
        //     "Semester 2": ["Subject 11", "Subject 12"],
        // },
        // IVYear: {
        //     "Semester 1": ["Subject 13", "Subject 14"],
        //     "Semester 2": ["Subject 15", "Subject 16"],
        // },
    };

    const courseOutcomes = {
        "Mathematics-I": ["CO 1: Find rank of a matrix and solve a linear system of equations.",
            "CO 2: Evaluate eigen values, eigen vectors and find the Modal matrix under a linear transformation.",
            "CO 3: Evaluate surface areas and volumes of solids of revolution, Apply Mean value theorems in relevant engineering domains.",
            "CO 4: Determine the convergence/divergence of a given infinite series.",
            "CO 5: Find the extremum of a multi-variate function with or without constraints."
        ],
        "Engineering Chemistry": ["CO 1: Rationalise periodic properties such as ionization potential, electron affinity, oxidation states and electronegativity.",
            "CO 2: Understanding the importance of EMF, corrosion and treatment of water.",
            "CO 3: List major chemical reactions that are used in the synthesis of molecules.",
            "CO 4: Analyze microscopic chemistry in terms of atomic and molecular orbitals and intermolecular forces.",
            "CO 5: Would develop ability to handle situations involving problems associated with chemical substances in engineering situations."],
        // Add COs for all subjects here
        "Problem solving Through 'C'": ["CO 1: Understand programming concepts and analyze a problem, design a solution and develop an algorithm to solve it.",
            "CO 2: Modularize a problem and implement the solution using basic programming concepts, control statements and functions.",
            "CO 3: Evaluate the use of macros and implement solutions to complex problems using recursion and homogeneous data types.",
            "CO 4: Implement pointers for problems of relevance and use different dynamic memory allocation methods.",
            "CO 5: Design and implement appropriate user defined structures to a given problem definition and apply various functions for processing files."]
    };

    const handleYearClick = (year) => {
        setSelectedYear(year);
        setSelectedSubject(null);
    };

    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject);
    };

    return (
        <div className='main-page'>
            <Sidebar />
            <div class="main-content">
                <h2>Year-wise Courses</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Semester 1</th>
                            <th>Semester 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(yearData).map((year) => (
                            <tr key={year}>
                                <td>{year}</td>
                                <td>
                                    <ul>
                                        {yearData[year]["Semester 1"].map((subject) => (
                                            <li key={subject} onClick={() => handleSubjectClick(subject)}>
                                                {subject}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {yearData[year]["Semester 2"].map((subject) => (
                                            <li key={subject} onClick={() => handleSubjectClick(subject)}>
                                                {subject}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {selectedSubject && (
                    <div>
                        <h3>Course Outcomes for {selectedSubject}</h3>
                        <ul>
                            {courseOutcomes[selectedSubject].map((co) => (
                                <li key={co}>{co}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default COS18Page;