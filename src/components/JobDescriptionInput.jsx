import React from 'react';

const JobDescriptionInput = ({ onInputChange }) => {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <textarea
      placeholder="Paste the job description here..."
      onChange={handleChange}
      rows="10"
      style={{ width: '100%', marginTop: '20px' }}
    />
  );
};

export default JobDescriptionInput; // Ensure default export here
  