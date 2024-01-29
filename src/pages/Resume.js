import React from 'react';
import resume from '../assets/resume.pdf';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Resume() {
  return (
    <div className="resume">
      <Header />
      <h2>My Resume</h2>
      <p>
        Download my resume as a{' '}
        <a href={resume} target="_blank" rel="noopener noreferrer">
          PDF
        </a>
        .
      </p>
      <Footer />
    </div>
  );
}

export default Resume;