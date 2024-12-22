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
import COsPage from './pages/COsPage';
import COS18Page from './pages/COS18Page';
function App() {
  return (
    <Router basename='/'>
      <h1>Department of Information Technology</h1>
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
              <Route path="/cos" element={<COsPage/>} />
              <Route path="/cos18" element={<COS18Page/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
