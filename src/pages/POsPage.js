import React from 'react';
import Sidebar from '../components/Sidebar';
// import './POsPage.css'; // Assuming you'll have custom styles for this page

const POsPage = () => {
    return (
        <div className='main-page'>
            <Sidebar />
            <div className="main-content">
                <h2>Program Outcomes (POs)</h2>

                <table>
                    <thead>
                        <tr>
                            <th>PO Number</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PO1</td>
                            <td>Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</td>
                        </tr>
                        <tr>
                            <td>PO2</td>
                            <td>Problem Analysis: Identify, formulate, research literature, and analyze complex engineering problems to reach substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</td>
                        </tr>
                        <tr>
                            <td>PO3</td>
                            <td>Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and cultural, societal, and environmental considerations.</td>
                        </tr>
                        <tr>
                            <td>PO4</td>
                            <td>Conduct Investigations of Complex Problems: Use research-based knowledge and research methods including design of experiments, analysis, and interpretation of data, and synthesis of the information to provide valid conclusions.</td>
                        </tr>
                        <tr>
                            <td>PO5</td>
                            <td>Modern Tool Usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modeling, to complex engineering activities, with an understanding of the limitations.</td>
                        </tr>
                        <tr>
                            <td>PO6</td>
                            <td>The Engineer and Society: Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to professional engineering practice.</td>
                        </tr>
                        <tr>
                            <td>PO7</td>
                            <td>Environment and Sustainability: Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</td>
                        </tr>
                        <tr>
                            <td>PO8</td>
                            <td>Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</td>
                        </tr>
                        <tr>
                            <td>PO9</td>
                            <td>Individual and Teamwork: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</td>
                        </tr>
                        <tr>
                            <td>PO10</td>
                            <td>Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</td>
                        </tr>
                        <tr>
                            <td>PO11</td>
                            <td>Project Management and Finance: Demonstrate knowledge and understanding of engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</td>
                        </tr>
                        <tr>
                            <td>PO12</td>
                            <td>Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Program Specific Outcomes (PSOs)</h2>

        <table>
          <thead>
            <tr>
              <th>PSO No.</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PSO 1</td>
              <td>An ability to analyze a problem, design algorithm, identify and define the computing requirements within realistic constraints and implement through analytical, logical and problem solving skills.</td>
            </tr>
            <tr>
              <td>PSO 2</td>
              <td>Ability to design and develop prototype innovatively leading to product development and contributions to open source community meeting ever changing societal needs.</td>
            </tr>
            <tr>
              <td>PSO 3</td>
              <td>Effectively integrate IT-based solutions into the user environment.</td>
            </tr>
            <tr>
              <td>PSO 4</td>
              <td>Ability to pursue higher studies and research in inter-disciplinary areas.</td>
            </tr>
          </tbody>
        </table>

            </div>
        </div>
    );
};

export default POsPage;
