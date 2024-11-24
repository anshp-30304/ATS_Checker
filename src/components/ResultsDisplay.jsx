import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css"

const ResultsDisplay = ({ results, resumeKeywords, jobKeywords }) => {
  if (!Array.isArray(results) || results.length === 0) {
    return <div>No results to display.</div>;
  }
  const percentage = Math.round((results.length / resumeKeywords.length) * 100);
  return (
    <div className="results-container">
      <h2>Your ATS Score</h2>
      <div className="span">  
      <CircularProgressbar value={percentage} text={`${percentage}%`} styles={{
            path: {
              stroke: percentage > 75 ? 'green' : percentage > 50 ? 'orange' : 'red', // Dynamic color based on score
              strokeLinecap: 'round',
              transition: 'stroke-dashoffset 0.5s ease 0s',
            },
            text: {
              fontSize: '16px',
              fill: '#333',
            },
          }}/>
      </div>
    </div>
  );
};

export default ResultsDisplay;
