import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VisionMissionPage from './pages/VisionMissionPage';
import FacultyPage from './pages/FacultyPage';
import ResearchPage from './pages/ResearchPage';
import Home from './components/Home';
import './App.css';
import PEOsPage from './pages/PEOsPage';
import POsPage from './pages/POsPage';
import CourseOutcomes from './pages/COsPage';
import COS18Page from './pages/COS18Page';
import PatentsPage from './pages/PatentsPage';
import PublicationsPage from './pages/PublicationsPage';
import FDPsPage from './pages/FDPsPage';
import ConferencesPage from './pages/ConferencesPage';
import Footer from './components/footer';
import StudentPage from './pages/StudentPage';
import IngenuityPage from './pages/IngenuityPage';
import NityGrityPage from './pages/NityGrityPage';
import StudentWorkshopsPage from './pages/StudentWorkshopsPage';
import GuestLecturesPage from './pages/GuestLecturesPage';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Navbar />
        <div className="main-layout">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vision" element={<VisionMissionPage />} />
              <Route path="/faculty" element={<FacultyPage />} />
              <Route path="/research" element={<ResearchPage />} />
              
              <Route path="/peos" element={<PEOsPage/>} />
              <Route path="/pos" element={<POsPage/>} />
              <Route path="/cos" element={<CourseOutcomes/>} />
              <Route path="/cos18" element={<COS18Page/>} />
              
              <Route path="/patents" element={<PatentsPage/>} />
              <Route path="/publications" element={<PublicationsPage/>} />
              <Route path="/fdps" element={<FDPsPage/>} />
              <Route path="/conferences" element={<ConferencesPage/>} />

              <Route path="/student" element={<StudentPage/>} />
              <Route path="/ingenuity" element={<IngenuityPage/>} />
              <Route path="/nitygrity" element={<NityGrityPage/>} />
              <Route path="/workshops" element={<StudentWorkshopsPage/>} />
              <Route path="/guestlectures" element={<GuestLecturesPage/>} />

            </Routes>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
