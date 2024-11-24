import React, { useState } from 'react';
import { extractKeywords } from './keywordExtractor'; // Adjust the path as needed
import * as pdfjsLib from 'pdfjs-dist';
import { GlobalWorkerOptions } from 'pdfjs-dist';

// Set the worker source for PDF parsing
GlobalWorkerOptions.workerSrc = `./pdf.worker.mjs`;

const ResumeUpload = ({ onProcessResume }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload and PDF parsing
  const handleFileUpload = async () => {
    if (!file) {
      setError('Please upload a file.');
      return;
    }

    try {
      setError(null);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const pdfData = new Uint8Array(e.target.result);
        const pdfDoc = await pdfjsLib.getDocument(pdfData).promise;

        let textContent = '';
        for (let i = 0; i < pdfDoc.numPages; i++) {
          const page = await pdfDoc.getPage(i + 1);
          const text = await page.getTextContent();
          textContent += text.items.map(item => item.str).join(' ');
        }

        // Extract keywords dynamically from the extracted text
        const keywords = extractKeywords(textContent);
        onProcessResume(keywords); // Pass the keywords to the parent component
      };
      reader.readAsArrayBuffer(file);
    } catch (err) {
      setError('Error processing PDF.');
      console.error(err);
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload Resume</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ResumeUpload;
