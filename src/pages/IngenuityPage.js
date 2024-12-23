import React, { useState } from 'react';
import StudentSidebar from '../components/StudentSidebar';

const IngenuityPage = () => {
  
  return (
    <div className="main-page">
     <StudentSidebar/>     
      
      <div className='main-content'>
        <img src='/images/ingenuity_logo.webp' alt="no image"></img>

        <b><p>IngenuITy is a students Technical Association of department of IT inaugurated on 06-02-2016. The association comprises of several technical groups.
        There are many technical events organized under IngenuITy from the day of its inauguration as guest lectures, workshops and technical fests.</p>

        <p>The association comprises of 8 technical groups namely,</p>
                     <ul>

            <li>Coding & Algorithms</li>

           <li>Applications & Software</li>

           <li>Networks & Security</li>

           <li>Data Systems & Management</li>

          <li>Embedded systems & Design</li>

          <li>Operating Systems & Kernel Programming</li>

          <li>Communication & Socialization</li>

           <li>Innovation group</li>
                     </ul>
</b>
      </div>
    </div>
  );
};

export default IngenuityPage;
