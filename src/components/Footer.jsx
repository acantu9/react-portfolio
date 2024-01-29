import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <ul>
        <li>
          <a href="https://github.com/acantu9" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/adriana-cant%C3%BA-2243392b1/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/22900778/adriana-cant%c3%ba" target="_blank" rel="noopener noreferrer">
            Stack Overflow
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;