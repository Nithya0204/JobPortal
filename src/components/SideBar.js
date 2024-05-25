import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UploadResumeModal from './UploadResumeModal';
import '../styles.css';
import mailImage from '../images/mail.png';
import fastImage from '../images/fast.png';

function SideBar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setShowModal(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setShowModal(false);
  };

  return (
    <section className="col-md-3">
      <section>
        <div className="container2">
          <div className="logo-container">
            <img src={mailImage} alt="logo" className="image" />
            <h3>Email me for jobs</h3><br />
          </div>
          <p className="ms-2">Stay Updated with the Latest Job Opportunities!</p>
          <input type="text" className="ms-2" id="email" name="email" placeholder="abcd@gmail.com" style={{ height: '40px', width: '250px' }} />
          <Link to="/pricing">
            <button className="btn btn-primary mt-2 mx-2" style={{ height: '40px', width: '250px' }}>Subscribe</button>
          </Link>
        </div>
      </section>
      <section>
        <div className="container2">
          <div className="container-lg">
            <div className="logo-container">
              <img src={fastImage} alt="logo" className="image" />
              <h3>Get noticed faster</h3><br />
            </div>
            <p className="ms-2">Step into Success Faster: Get Instant Job Opportunities Delivered!</p>
            <button
              type="button"
              className="btn btn-primary mt-2 ms-2"
              style={{ height: '40px', width: '250px' }}
              onClick={openModal}
            >
              Upload your resume
            </button>
          </div>
        </div>
      </section>
      {showModal && <UploadResumeModal onClose={closeModal} />}
    </section>
  );
}

export default SideBar;
