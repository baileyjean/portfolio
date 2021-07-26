import React from 'react';

const Projects = (props) => {
  return (
    <div id="project-single">
      <h2>{props.name}</h2>
      <div className="project-media">
        {props.media}
      </div>
      <p><b>Tech Used:</b><br />{props.techStack}</p>
      <b>Link to {props.name}:</b>
      <a href={props.link} target="_blank" rel="noReferrer">{props.name}</a>
      <br />
      {/* <b>Description:</b>
      <p id="description">{props.description}</p> */}
    </div>
  )
}

export default Projects;
