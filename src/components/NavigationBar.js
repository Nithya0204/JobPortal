import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa2MIKJFzxdfzDrXwbElUQZnWVxbNiGKAq2g&usqp=CAU" style={{ width: '40px' }} className="border rounded-pill" />
        <a className="navbar-brand me-auto ms-1">nameless</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <Link to="/start-search" className="nav-link">Start a Search</Link>
            </li>
            <li className="nav-item">
              <Link to="/job-lists" className="nav-link">Job lists</Link>
            </li>
            <li className="nav-item">
              <Link to="/salary-estimate" className="nav-link">Salary Estimate</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">Pricing</Link>
            </li>
          </ul>
          <h4 className='mx-2'> User </h4>
          <Link to="/" className="btn text-bg-primary me-2">Log Out</Link>
          
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
