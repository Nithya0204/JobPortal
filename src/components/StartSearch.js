import React, { useState } from 'react';
import Filters from './Filters';
import JobListings from './JobListings';
import SideBar from './SideBar';

function StartSearch() {
  const [filters, setFilters] = useState({
    location: '',
    salary: '',
    date: '',
    experience: '',
    employmentType: '',
    position: '',
    searchLocation: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const position = event.target.position.value;
    const searchLocation = event.target.location.value;

    setFilters((prevFilters) => ({
      ...prevFilters,
      position,
      searchLocation
    }));
  };

  return (
    <div>
      <div className="mt-4 ms-5">
        <h1>Find Your<span style={{ color: 'blue' }}> New Job </span>Today</h1>
        <p>Thousands of jobs in the computer engineering and technology sectors are waiting for you.</p>
      </div>
      <form onSubmit={handleSearch} className="d-flex mx-5 mt-4 mb-5">
        <div className="input-group">
          <span className="input-group-text"><i className="fi fi-br-search"></i></span>
          <input className="form-control border-start-0 rounded-top-0 rounded-bottom-0" type="text" id="position" placeholder="What position are you looking for?" style={{ height: '50px' }} />
        </div>
        <div className="input-group">
          <span className="input-group-text rounded-0"><i className="fi fi-rs-marker"></i></span>
          <input className="form-control border-start-0 rounded-0" type="text" id="location" placeholder="Location" style={{ height: '50px' }} />
          <button className="btn btn-primary" type="submit" style={{ height: '50px' }}>Search Jobs</button>
        </div>
      </form>
      <div className="container-fluid bg-light">
        <div className="row">
          <Filters filters={filters} onFilterChange={handleFilterChange} />
          <JobListings filters={filters} />
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default StartSearch;
