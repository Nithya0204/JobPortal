import React, { useState } from 'react';

function UploadResumeModal({ onClose }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log("File selected:", e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log("Uploading file:", file);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Upload Your Resume</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleSubmit}>Upload</button>
      </div>
    </div>
  );
}

export default UploadResumeModal;
