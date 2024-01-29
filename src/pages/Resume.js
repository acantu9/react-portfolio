import React from 'react';
import resume from '../assets/resume.pdf';

function Resume() {
  return (
    <div className="resume">
      <h2>My Resume</h2>
      <p>
        Download my resume as a{' '}
        <a href={resume} target="_blank" rel="noopener noreferrer">
          PDF
        </a>
        .
      </p>
    </div>
  );
}

export default Resume;