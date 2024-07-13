// src/Skills.js
import React from 'react';
import '../components/Skills.css'
import php from "../images/php.png"
import java from "../images/java.png"
import css from "../images/css.jpg"
import react from "../images/react.png"
import javascript from "../images/js.png"
import mysql from "../images/mysql.png"

const programmingLanguages = [
  { name: 'PHP', image: php },
  { name: 'Java', image: java },
  { name: 'CSS', image: css },
  { name: 'React', image: react },
  { name: 'JavaScript', image: javascript },
  { name: 'mysql', image: mysql }
];

const toolsAndFrameworks = [
 {name:"Express"},
 {name:"Amazon Web Services"},
 {name:"Git"},
 {name:"Symphony"},
 {name:"Docker"}

];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      
      <div className="section">
        <h2 style={{color:"white"}} >Programming Languages</h2>
        <div className="skills-list">
          {programmingLanguages.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="section" id='tools'>
        <h2 style={{color:"white"}}>Tools and Frameworks</h2>
        <div className="skills-list">
          {toolsAndFrameworks.map((tool, index) => (
            <div key={index} className="skill-card">
           
              <p className="skill-name">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;


