import React from 'react';
import StudentSideBar from "../components/StudentSidebar"
function StudentPage() {
  return (
    <div className="main-page">
      <StudentSideBar />
      {/* console.log({faculty_publications.faculty_publications}) */}
      <div className="main-content">
        <h3>IngenuITy - IT department Student Branch</h3>
        IngenuITy is aStudent Technical Association of IT DEPARTMENT. "IngenuITy" organized a Department Technical fest for the first time "TECHSHASTRA - 2016" on 7th October 2016. In this regard, the Department organized seven different events for the students. The following are the details.

        <h3>Student Branch Of CSI </h3>
        IT Dept. and CSE Dept. jointly started CSI (Computer Society of India) Student Branch. Computer Society of India is the first and the largest body of computer professionals in India. It was started on 6 March, 1965 by a few computer professionals and has now grown to be the national body, representing computer professionals. It has 72 chapters across India, 511 student branches, and more than 100,000 members.

        <h3>IEEE Student Chapter</h3>
        Student Chapters of the IEEE and Department Technical Associations have been formed and they are active, every year by conducting several activities. Many of the IT students participate in the events.

        <h3>IETE Student Chapter</h3>
        Student Chapters of the IETE and Department Technical Associations have been formed and they are as active, as like every year. The student chapter of the IETE was inaugurated on 12th March 2011 by the President of IETE Mr R K Gupta. The College has enrolled as an Institutional Member of IETE.
        <h3>CIENCIA - Technical Event</h3>
        Under the umbrella of CIENCIA - A national level tech fest, the IT Dept. conducts various events like paper/ poster presentation, design/ working model contest, programming contest and gaming, Technical Quiz etc.
        <h2>Publication of technical magazines, newsletters</h2>
        To mark the overall accomplishments of the department, a newsletter is published twice a year. This newsletter encapsulates the developments in the department, technical events conducted within the department. To spread the awareness about upcoming trends in the field of Information Technology and industry, faculty and students are involved in sharing their knowledge and experiences. The following are the list of college technical magazines, newsletters. Especially The last two magazines are completely from IT department students.

        <ul>


          <li>
            <b>CVR journal of Science & Technology</b>- College publishes in house journal "CVR Journal of Science & Technology" with ISSN No.2277-3916, twice in a year. This has editorial board with senior professors from college and from other Universities/ Institutions. Dr.Lal Kishore, Dean Research is the Chief Editor. Invitation is sent to colleges for receiving technical papers. The papers received in a prescribed format are selected by a screening committee. Such papers are published in the journal. This gives encouragement for publishing papers.
          </li>
          <li><b>Aegle Vista </b>- a half yearly newsletter by name "Aegle Vista" - consisting of all the developments that take place for every six months in each and every department of CVR College of engineering.
          </li>
          <li>A magazine that portrays the events conducted during CIENCIA- annual national level technical symposium conducted at CVR College of Engineering.
          </li>
          <li><b>DigITal lITeraty</b>- A technical magzine prepared by students of IT under the guidance of senior faculty and is published half yearly. Dr.J.Sengathir is the Chief Editor.
          </li>
          <li><b>NiITy-GrITty</b>- A non-techical magzine prepared by students of IT under the guidance of senior faculty and is published half yearly. Dr. BB Jaya Singh is the chief editors.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StudentPage;
