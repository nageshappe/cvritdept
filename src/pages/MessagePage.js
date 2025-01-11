import React from "react";
const MessagePage = () => {
    return (
        <div className="main-content">
         <div className="msg-header">

            <img  src={process.env.PUBLIC_URL + "/images/hod_photo.jpg"} width="50%" height="40%" />
            <p><strong>Dr. Bipin Bihari Jayasingh, Professor & Head of Department</strong></p>
         </div>
      
         <p>We feel great pleasure to welcome to the Department of Information Technology at CVR College of Engineering. We started our journey in the year of 2001, we have grown our expertise, and competence in the Information Technology curriculum and research.</p>

          <p>We have a strong undergraduate program in Information Technology; the sanctioned students strengths of B. Tech. are 120 per year. The primary focus of our curriculum is to impart the Technical knowledge to students; promote their problem solving skills and innovation of new technologies. The course contents are periodically updated for introducing new scientific and technological developments. Undergraduate students are encouraged to undertake various research projects leading to innovative design & products</p>

           <p>Faculty members have excellent academic credentials and are highly regarded, for both teaching & research. This website provides an overview of the academic programs, research activities of our department, research facilities, profiles of faculty members, and details of student activities.</p>

            <p>Our department has been conducting workshops, faculty development programs, seminars, guest lectures and conferences since its beginning to keep the faculty and students abreast with the latest developments in the field of technical education.</p>

            <p>IngenuITy is a students Tech Association of department of IT inaugurated on 06/02/2016. The association comprises of seven technical groups namely coding & algorithms, Applications & Softwares, Networks & Security, Data Systems & Management, Embedded systems & Design, Operating Systems & Kernel Programming and Communication & Socialization. There were many technical events organized under IngenuITy from the day of its inauguration as guest lectures, workshops, and technical fest. 
                Tech shastra is a annual technical fest organized by IngenuITy.</p>

            <p>I am certain that our students will prove to be an invaluable asset to an organization. Since then; several batches have passed out and have been placed in leading business organizations in all major areas like comwalt, Amazon development, virtusa Polaris, TCS, HP, Quicker, Vooniks, Yardley, and Techsystems. Special word of welcome to our stakeholders, who are eminent in every walk of life and in every part of the world.</p>

            <p>If you have further queries after browsing this website, please do not hesitate to contact us. Our department looks forward to contribute in solving the technological challenges of the society with active participation from all sections of the society. Thank you for visiting us.</p>
        </div>

    )
}

export default MessagePage;