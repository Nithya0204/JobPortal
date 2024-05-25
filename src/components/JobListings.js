import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';

function JobListings({ filters }) {
  const [jobListings, setJobListings] = useState([]);
  const [sortBy, setSortBy] = useState('none');

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const response = await axios.get('https://remotive.io/api/remote-jobs');
        setJobListings(response.data.jobs);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };

    fetchJobListings();
  }, []);

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortBy(selectedOption);
    sortJobs(selectedOption);
  };

  const sortJobs = (option) => {
    const sortedListings = [...jobListings];

    if (option === 'alphabeticalAsc') {
      sortedListings.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === 'alphabeticalDesc') {
      sortedListings.sort((a, b) => b.title.localeCompare(a.title));
    }

    setJobListings(sortedListings);
  };

  const filterJobListings = (jobs) => {
    return jobs.filter((job) => {
      const matchesLocation = filters.location ? job.candidate_required_location?.toLowerCase().includes(filters.location.toLowerCase()) : true;
      const matchesSalary = filters.salary ? checkSalaryRange(job.salary, filters.salary) : true;
      const matchesDate = filters.date ? checkDateRange(job.publication_date, filters.date) : true;
      const matchesEmploymentType = filters.employmentType ? job.job_type.toLowerCase().includes(filters.employmentType.toLowerCase()) : true;
      const matchesPosition = filters.position ? job.title.toLowerCase().includes(filters.position.toLowerCase()) : true;
      const matchesSearchLocation = filters.searchLocation ? job.candidate_required_location?.toLowerCase().includes(filters.searchLocation.toLowerCase()) : true;
      return matchesLocation && matchesSalary && matchesDate && matchesEmploymentType && matchesPosition && matchesSearchLocation;
    });
  };

  const checkDateRange = (jobDate, filterDate) => {
    const jobPublicationDate = new Date(jobDate);
    const now = new Date();

    switch (filterDate) {
      case 'last24h':
        return jobPublicationDate >= new Date(now - 24 * 60 * 60 * 1000);
      case 'last3days':
        return jobPublicationDate >= new Date(now - 3 * 24 * 60 * 60 * 1000);
      case 'last7days':
        return jobPublicationDate >= new Date(now - 7 * 24 * 60 * 60 * 1000);
      case 'any':
      default:
        return true;
    }
  };

  const checkSalaryRange = (jobSalary, filterSalary) => {
    if (!jobSalary) return false;

    const salaryValue = parseInt(jobSalary.replace(/[^0-9]/g, ''), 10);

    switch (filterSalary) {
      case '30000':
        return salaryValue < 30000;
      case '30000-60000':
        return salaryValue >= 30000 && salaryValue <= 60000;
      case '60000-100000':
        return salaryValue >= 60000 && salaryValue <= 100000;
      case '100000+':
        return salaryValue > 100000;
      case 'any':
      default:
        return true;
    }
  };

  const filteredJobListings = filterJobListings(jobListings);

  return (
    <section className="col-md-6">
      <div className="header-container">
        <h3 className="mt-3">{filteredJobListings.length} Jobs</h3>
        <select
          className="form-select-sm m-3 filter-icon"
          style={{ height: '40px', width: '250px' }}
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="none">Filter By</option>
          <option value="alphabeticalAsc">Alphabetical (A-Z)</option>
          <option value="alphabeticalDesc">Alphabetical (Z-A)</option>
        </select>
      </div>

      {filteredJobListings.map((job) => (
        <section key={job.id}>
          <div className="container1">
            <div className="logo-container1">
              <img
                src={job.company_logo || 'https://via.placeholder.com/150'}
                alt="logo"
                className="image1"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://api.allorigins.win/raw?url=${encodeURIComponent(job.company_logo)}`;
                }}
              />
              <div className="role">
                <div className="mx-2">{job.company_name}</div>
                <div className="mx-2" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  {job.title}
                </div>
              </div>
            </div>
            <div className="job-details mx-5 mt-2">
              <div className="item">
                <i className="fi fi-rr-globe"></i> {job.category}
              </div>
              <div className="item">
                <i className="fi fi-rr-dollar"></i> {job.salary}
              </div>
              <div className="item">
                <i className="fas fa-calendar-day"></i>{' '}
                {new Date(job.publication_date).toLocaleDateString()}
              </div>
            </div>
            <div className='mx-5 my-3'>
            <p>Seeking a dedicated professional to perform various tasks supporting company operations, collaborating with team members to achieve objectives, and ensuring timely and accurate task completion. 
              </p></div>
          </div>
        </section>
      ))}
    </section>
  );
}

export default JobListings;
