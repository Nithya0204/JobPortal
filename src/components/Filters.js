import React from 'react';
import '../styles.css';

function Filters({ filters, onFilterChange }) {
  const handleLocationChange = (e) => {
    onFilterChange({ ...filters, location: e.target.value });
  };

  const handleSalaryChange = (e) => {
    onFilterChange({ ...filters, salary: e.target.value });
  };

  const handleDateChange = (e) => {
    onFilterChange({ ...filters, date: e.target.value });
  };

  

  const handleEmploymentTypeChange = (e) => {
    onFilterChange({ ...filters, employmentType: e.target.value });
  };

  return (
    <section className="col-md-2">
      <div className="container">
        <h3 className="mb-2">Filters</h3>
        <h6>Location</h6>
        <input type="radio" id="loc1" name="location" value="Europe" onChange={handleLocationChange} />
        <label htmlFor="loc1" style={{ lineHeight: '2' }}>Europe</label><br />
        <input type="radio" id="loc2" name="location" value="EMEA" onChange={handleLocationChange} />
        <label htmlFor="loc2" style={{ lineHeight: '2' }}>EMEA</label><br />
        <input type="radio" id="loc3" name="location" value="Mexico" onChange={handleLocationChange} />
        <label htmlFor="loc3" style={{ lineHeight: '2' }}>Mexico</label><br />
        <input type="radio" id="loc3" name="location" value="Canada" onChange={handleLocationChange} />
        <label htmlFor="loc3" style={{ lineHeight: '2' }}>Canada</label><br />
        <input type="radio" id="loc3" name="location" value="Ukraine" onChange={handleLocationChange} />
        <label htmlFor="loc3" style={{ lineHeight: '2' }}>Ukraine</label><br />
        <input type="radio" id="loc3" name="location" value="USA" onChange={handleLocationChange} />
        <label htmlFor="loc3" style={{ lineHeight: '2' }}>USA</label><br />
        <input type="radio" id="loc3" name="location" value="Worldwide" onChange={handleLocationChange} />
        <label htmlFor="loc3" style={{ lineHeight: '2' }}>Worldwide</label><br />
        <input type="radio" id="loc3" name="location" value="Colombia" onChange={handleLocationChange} />
        <label htmlFor="loc3" style={{ lineHeight: '2' }}>Colombia</label><br />
        
        <h6 className="mt-3">Salary</h6>
        <input type="radio" id="sal1" name="salary" value="any" onChange={handleSalaryChange} />
        <label htmlFor="sal1" style={{ lineHeight: '2' }}>Any</label><br />
        <input type="radio" id="sal2" name="salary" value="30000" onChange={handleSalaryChange} />
        <label htmlFor="sal2" style={{ lineHeight: '2' }}>Less than $30,000</label><br />
        <input type="radio" id="sal3" name="salary" value="30000-60000" onChange={handleSalaryChange} />
        <label htmlFor="sal3" style={{ lineHeight: '2' }}>$30,000 - $60,000</label><br />
        <input type="radio" id="sal4" name="salary" value="60000-100000" onChange={handleSalaryChange} />
        <label htmlFor="sal4" style={{ lineHeight: '2' }}>$60,000 - $100,000</label><br />
        <input type="radio" id="sal5" name="salary" value="100000+" onChange={handleSalaryChange} />
        <label htmlFor="sal5" style={{ lineHeight: '2' }}>More than $100,000</label><br />

        <h6 className="mt-3">Date of Posting</h6>
        <input type="radio" id="dop" name="dop" value="any" onChange={handleDateChange} />
        <label htmlFor="dop" style={{ lineHeight: '2' }}>Any</label><br />
        <input type="radio" id="dop1" name="dop" value="last24h" onChange={handleDateChange} />
        <label htmlFor="dop1" style={{ lineHeight: '2' }}>Last 24 hours</label><br />
        <input type="radio" id="dop2" name="dop" value="last3days" onChange={handleDateChange} />
        <label htmlFor="dop2" style={{ lineHeight: '2' }}>Last 3 days</label><br />
        <input type="radio" id="dop3" name="dop" value="last7days" onChange={handleDateChange} />
        <label htmlFor="dop3" style={{ lineHeight: '2' }}>Last 7 days</label><br />

        

        <h6 className="mt-3">Type of Employment</h6>
        <input type="radio" id="te" name="te" value="full_time" onChange={handleEmploymentTypeChange} />
        <label htmlFor="te" style={{ lineHeight: '2' }}>Full-time</label><br />
        <input type="radio" id="te1" name="te" value="part_time" onChange={handleEmploymentTypeChange} />
        <label htmlFor="te1" style={{ lineHeight: '2' }}>Part-time</label><br />
        <input type="radio" id="te2" name="te" value="contract" onChange={handleEmploymentTypeChange} />
        <label htmlFor="te2" style={{ lineHeight: '2' }}>Contract</label><br />
        <input type="radio" id="te3" name="te" value="internship" onChange={handleEmploymentTypeChange} />
        <label htmlFor="te3" style={{ lineHeight: '2' }}>Internship</label><br />
      </div>
    </section>
  );
}

export default Filters;
