import React from 'react';

function Project({ title, description, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <h4>{title}</h4>
      <img src={image} alt={title} />
      <p>{description}</p>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View Deployed Project
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          View Github Repo
        </a>
      </div>
    </div>
  );
}

export default Project;