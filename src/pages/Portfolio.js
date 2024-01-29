import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/yourusername/project2',
    },
    // ...
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project) => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
            Deployed
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;