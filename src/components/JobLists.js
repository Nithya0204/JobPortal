import React, { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  jobItem: {
    marginBottom: '5px',
  },
};

function JobLists({ searchQuery }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://remotive.com/api/remote-jobs');
        console.log(response.data); // Log API response to console
        setJobs(response.data.jobs); // Update state with fetched jobs
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, [searchQuery]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Job Listings</h2>
      <p>Here are some of the latest job listings:</p>
      <ul>
        {jobs.map(job => (
          <li key={job.id} style={styles.jobItem}>
            <strong>{job.title}</strong> - {job.company_name}
          </li> 
        ))}
      </ul>
    </div>
  );
}

export default JobLists;
