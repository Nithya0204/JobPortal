import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import NavigationBar from './components/NavigationBar';
import StartSearch from './components/StartSearch';
import JobLists from './components/JobLists';
import SalaryEstimate from './components/SalaryEstimate';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [searchQuery, setSearchQuery] = useState({ position: '', location: '' });

  const handleSearch = (e) => {
    e.preventDefault();
    const position = document.getElementById('position').value;
    const location = document.getElementById('location').value;
    setSearchQuery({ position, location });
  };

  return (
    <Router>
      <Main searchQuery={searchQuery} handleSearch={handleSearch} />
    </Router>
  );
}

function Main({ searchQuery, handleSearch }) {
  const location = useLocation();
  const showNavbar = !(location.pathname === '/' || location.pathname === '/signup');

  return (
    <div>
      {showNavbar && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {showNavbar && (
          <>
            <Route path="/start-search" element={<StartSearch handleSearch={handleSearch} />} />
            <Route path="/job-lists" element={<JobLists searchQuery={searchQuery} />} />
            <Route path="/salary-estimate" element={<SalaryEstimate />} />
            <Route path="/pricing" element={<Pricing />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
