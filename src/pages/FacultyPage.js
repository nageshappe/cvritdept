
import React, { useState } from 'react';
import facultyData from "../data/facultyprofiles.json";

function FacultyPage() {
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleProfileClick = (faculty) => {
        setSelectedFaculty(faculty);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedFaculty(null);
    }
    return (
        <div>
            <h1 className="text-center">Faculty of IT Department</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>Image</th>
                        <th>Faculty Name</th>
                        <th>Designation</th>
                        <th>Qualification</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {facultyData.map((faculty, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img src={process.env.PUBLIC_URL + faculty['img']} width="100px" height="100px" /></td>
                            <td>{faculty['Faculty Name']}</td>
                            <td>{faculty['Position']}</td>
                            <td>{faculty['Qualifications']}</td>
                            {/* <td><a href={faculty['Profile Link']} target='_blank'>Profile</a></td> */}
                            <td>
                                <button className="btn btn-info" onClick={() => handleProfileClick(faculty)}>Profile</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
            {/* Modal to display faculty profile */}
            {showModal && selectedFaculty && (
                <div className="modal show bg-primary" style={{ display: 'block' }} onClick={closeModal}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedFaculty['Faculty Name']}</h5>
                                <button type="button" className="close" onClick={closeModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body ">
                                <table className=" fs-6 table">
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <img
                                                    src={process.env.PUBLIC_URL + selectedFaculty['img']}
                                                    alt={selectedFaculty['Faculty Name']}
                                                    style={{ width: '150px', height: '150px' }}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Designation:</strong></td>
                                            <td>{selectedFaculty['Position']}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Qualifications:</strong></td>
                                            <td>{selectedFaculty['Qualifications']}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Department:</strong></td>
                                            <td>{selectedFaculty['Department']}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Email:</strong></td>
                                            <td>{selectedFaculty['email']}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Date of Joining:</strong></td>
                                            <td>{selectedFaculty['Date of Joining']}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Specialization/Research Area:</strong></td>
                                            <td>{selectedFaculty['specialization']}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Subjects Taught:</strong></td>
                                            <td>{selectedFaculty['subjects']}</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                {selectedFaculty['Profile Link'] && (
                                                    <a href={selectedFaculty['Profile Link']} target="_blank" rel="noopener noreferrer">
                                                        LinkedIn
                                                    </a>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default FacultyPage;
