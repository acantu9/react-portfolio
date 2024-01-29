import React from "react";
import portfolioData from "../data/portfolioData";
import Project from "./Project";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;