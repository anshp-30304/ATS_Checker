<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Resume Keyword Matcher</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f4f7fc;
      color: #333;
    }
    h1 {
      font-size: 2.5rem;
      color: #4a90e2;
      text-align: center;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 1.75rem;
      color: #333;
      margin-bottom: 10px;
    }
    p {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    ul li {
      font-size: 1rem;
      margin-bottom: 10px;
    }
    code {
      background-color: #f1f1f1;
      padding: 4px 8px;
      border-radius: 4px;
    }
    .section {
      margin-bottom: 40px;
    }
    .section h3 {
      font-size: 1.5rem;
      margin-top: 10px;
      color: #4a90e2;
    }
    .highlight {
      background-color: #eef7ff;
      padding: 10px;
      border-radius: 5px;
    }
    .footer {
      font-size: 0.9rem;
      color: #888;
      text-align: center;
      margin-top: 40px;
    }
    .footer a {
      color: #4a90e2;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <h1>Resume Keyword Matcher</h1>

  <div class="section">
    <h2>Overview</h2>
    <p>This project helps job seekers optimize their resumes by comparing their resume content with a job description, highlighting the matching keywords.</p>
    <p>The application allows users to upload both their resume and a job description, then calculates the percentage of matching keywords. It also visually displays the match percentage using a circular progress bar.</p>
  </div>

  <div class="section">
    <h2>Features</h2>
    <ul>
      <li>Upload a resume and job description.</li>
      <li>Automatically extract and compare keywords from both texts.</li>
      <li>Show the percentage of keyword matches between the resume and job description.</li>
      <li>Interactive circular progress bar for visual feedback.</li>
    </ul>
  </div>

  <div class="section">
    <h2>Technologies Used</h2>
    <ul>
      <li><code>React</code> - Front-end framework for building the user interface.</li>
      <li><code>CSS</code> - Styling for layout and components.</li>
      <li><code>JavaScript</code> - Core logic for comparing keywords and handling file uploads.</li>
      <li><code>react-circular-progressbar</code> - A library for creating the circular progress bar.</li>
    </ul>
  </div>

  <div class="section">
    <h2>How to Use</h2>
    <p>Follow these steps to use the application:</p>
    <ol>
      <li>Clone this repository to your local machine using the following command:</li>
      <div class="highlight">
        <code>git clone https://github.com/yourusername/resume-keyword-matcher.git</code>
      </div>
      <li>Navigate to the project folder:</li>
      <div class="highlight">
        <code>cd resume-keyword-matcher</code>
      </div>
      <li>Install dependencies:</li>
      <div class="highlight">
        <code>npm install</code>
      </div>
      <li>Run the application:</li>
      <div class="highlight">
        <code>npm start</code>
      </div>
      <li>Visit <code>http://localhost:3000</code> in your browser.</li>
    </ol>
  </div>

  <div class="section">
    <h2>Contributing</h2>
    <p>If you would like to contribute to this project, please fork the repository, create a new branch, and submit a pull request with your proposed changes.</p>
    <p>Ensure your code adheres to the project's coding standards and is well-documented.</p>
  </div>

  <div class="footer">
    <p>Made with ❤️ by <a href="https://github.com/yourusername" target="_blank">yourusername</a></p>
  </div>

</body>
</html>
