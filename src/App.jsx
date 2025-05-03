import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Home from './tabs/Home';
import About from './tabs/about/about';
import Project from './tabs/project/project';
import Contact from './tabs/contact/contact';
import Experience from './tabs/experience/experience';

function App() {
  const [activeTab, setActiveTab] = useState('');
  
  return (
    <Router>
      <div className="animated-background">

        {/* TABS HEADER */}
        <div className="tabs-header">
          {/* APP HEADER */}
          <div className="app-header">
            <Link
              to="/portfolio"
              className={`nav-link ${activeTab === "home" ? "active" : ""}`}
              onClick={() => setActiveTab("home")}
            >
              PORTFOLIO
            </Link>
          </div>

          {/* BUTTONS TAB */}
          <div className="nav">
            <Link
              to="/home"
              className={`nav-link ${activeTab === "home" ? "active" : ""}`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-link ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              About
            </Link>

            <Link
              to="/experience"
              className={`nav-link ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </Link>

            <Link
              to="/projects"
              className={`nav-link ${activeTab === "projects" ? "active" : ""}`}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => setActiveTab("contact")}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* TAB CONTENT */}
        <Routes>
          <Route path="/home" element={<Home setActiveTab={setActiveTab} />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Home setActiveTab={setActiveTab}/>} />
        </Routes>

      </div>
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Lim Tong En. All rights reserved.</p>
      </div>
    </Router>
  );
}

export default App;
