import React from 'react';
import '../css/Home.css';  // Optional: for adding styles
import "../css/Research.css";
const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1>Welcome to the Department of Engineering</h1>
        <p>Your path to excellence in engineering education and research</p>
      </header>
       <img src="/images/groupphoto.jpeg" width="100%" height="50%"></img>
      {/* About Section */}
      <section className="home-about">
        <h2>About Us</h2>
        <p>
        About IT Department
        The Department of Information Technology was started in the year 2001 with an initial intake of 60 B. Tech. students. Subsequently in the year 2007-08, the intake was increased to 120. The Department was accredited by NBA, AICTE in the year 2007 and reaccredited in the year 2013. The Department is headed by Prof. Bipin B. Jaya Singh. All faculty members have qualification of M. Tech., with a minimum of about 4 years of teaching experience at the Assistant Professor level, which is an entry level requirement for recruitment to the department. The faculty consists of a good mix of individuals with industry and academic experience. The Department also has a high faculty retention rate.
        </p>
      </section>

      {/* Department Highlights */}
      <section className="home-highlights">
        <h2>Department Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <h3>Industry Collaboration</h3>
            <p>We work closely with industry leaders to ensure our students gain real-world experience.</p>
          </div>
          <div className="highlight-item">
            <h3>State-of-the-Art Facilities</h3>
            <p>Our labs and research centers are equipped with the latest technology to foster innovation.</p>
          </div>
          <div className="highlight-item">
            <h3>World-Class Faculty</h3>
            <p>Our faculty members are renowned for their contributions to academia and industry.</p>
          </div>
          <div className="highlight-item">
            <h3>Student Success</h3>
            <p>Our students consistently achieve top placements in national and international companies.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="home-contact">
        <h2>Get in Touch</h2>
        <p>If you have any questions or want to know more about our department, feel free to contact us.</p>
        <a href="/contact" className="contact-button">Contact Us</a>
      </section>
    </div>
  );
};

export default Home;
