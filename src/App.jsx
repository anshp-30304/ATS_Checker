import React, { useState } from 'react';
import ResumeUpload from './components/ResumeUpload';
import JobDescriptionInput from './components/JobDescriptionInput';
import ResultsDisplay from './components/ResultsDisplay';
import { matchResumeToJob } from './components/matching';
import './App.css';

const App = () => {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [results, setResults] = useState([]);

  const handleProcessResume = (extractedText) => {
    console.log('Setting Resume Text:', extractedText);
    setResumeText(extractedText); // Save the resume text for comparison
  };

  const handleCheckMatch = () => {
    const result = matchResumeToJob(resumeText, jobDescription);
    setResults(result); // Store matching keywords
    console.log(result.length);
  };

  return (
    <div className='main'>
      <div className="first">
      <h1>ATS Checker</h1>
      <ResumeUpload onProcessResume={handleProcessResume} />
      <JobDescriptionInput onInputChange={setJobDescription} />
      <button onClick={handleCheckMatch}>Check Match</button>
      
      </div>
      <div className="second">

      <ResultsDisplay results={results} resumeKeywords={resumeText} jobKeywords={jobDescription}/>
      </div>
    </div>
  );
};

export default App;
