

import React from 'react';
import './Projects.css'; 

const projectData = [
  {
    title: "Project One",
    description: "This is a brief description of Project One.",
    technologies: ["React", "JavaScript", "CSS"],
    liveDemo: "http://example.com/project-one",
    repo: "http://github.com/user/project-one"
  },
  {
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    technologies: ["Node.js", "Express", "MongoDB"],
    liveDemo: "http://example.com/project-two",
    repo: "http://github.com/user/project-two"
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 style={{color:"white"}}>My Projects</h2>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">Repository</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
