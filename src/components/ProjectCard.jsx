import React from 'react';

const Projects = (props) => {
  return (
    <div id="project-single">
      <h2>{props.name}</h2>
      <div className="project-media">
        {props.media}
      </div>
      <p>Project Description: {props.description}</p>
      <p>Tech Used: {props.techStack}</p>
      <a href={props.link} target="_blank" rel="noReferrer">{props.name}</a>
    </div>
  )
}

export default Projects;
