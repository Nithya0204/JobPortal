import React, { useState } from 'react';
import Select from 'react-select';

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
  form: {
    marginBottom: '20px',
  },
  input: {
    marginRight: '10px',
    marginBottom: '10px',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '250px',
  },
  button: {
    padding: '8px 16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  estimatedSalary: {
    marginTop: '20px',
  },
};

function SalaryEstimate() {
  const [estimatedSalary, setEstimatedSalary] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');

  // Options for dropdowns
  const skillsOptions = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Angular.js', label: 'Angular.js' },
    { value: 'HTML/CSS', label: 'HTML/CSS' },
    { value: 'Bootstrap', label: 'Bootstrap' },
  ];
  const experienceOptions = Array.from({ length: 10 }, (_, i) => ({ value: i + 1, label: `${i + 1} year${i > 0 ? 's' : ''}` }));
  const locationOptions = [
    { value: 'New York', label: 'New York' },
    { value: 'San Francisco', label: 'San Francisco' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Austin', label: 'Austin' },
  ];

  // Function to handle salary calculation
  const calculateSalary = (event) => {
    event.preventDefault(); // Prevent form submission

    // For simplicity, let's say salary is based on the number of skills and experience level
    const salary = selectedSkills.length * experience * 5000; // $5000 per skill per year of experience

    // Update state with the calculated salary
    setEstimatedSalary(salary);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Salary Estimate</h2>
      <p>Find out what you can expect to earn:</p>
      {/* Add salary estimation form or calculator */}
      <form onSubmit={calculateSalary} style={styles.form}>
        {/* Dropdown for skills */}
        <label>
          Select your skills:
          <Select
            isMulti
            options={skillsOptions}
            value={selectedSkills}
            onChange={setSelectedSkills}
            style={styles.input}
          />
        </label>
        <br /><br />
        {/* Dropdown for experience level */}
        <label>
          Select your experience level:
          <Select
            options={experienceOptions}
            value={experienceOptions.find(option => option.value === experience)}
            onChange={option => setExperience(option.value)}
            style={styles.input}
          />
        </label>
        <br /><br />
        {/* Dropdown for location */}
        <label>
          Select your location:
          <Select
            options={locationOptions}
            value={locationOptions.find(option => option.value === location)}
            onChange={option => setLocation(option.value)}
            style={styles.input}
          />
        </label>
        <br /><br />
        <button type="submit" style={styles.button}>Calculate</button>
      </form>

      {/* Display the estimated salary */}
      {estimatedSalary && (
        <div style={styles.estimatedSalary}>
          <p>Your estimated salary: ${estimatedSalary}</p>
        </div>
      )}
    </div>
  );
}

export default SalaryEstimate;
