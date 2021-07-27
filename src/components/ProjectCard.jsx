import React from 'react';

const Projects = (props) => {
  return (
    <div id="project-single">
      <h2>{props.name}</h2>
      <div className="project-media">
        <a href={props.link} target="_blank" rel="noReferrer">{props.media}</a>
      </div>
      <button className="myBtn" onClick={() => { document.getElementById(props.index.toString()).style.display = "block"; }}>Description</button>
      <div className="modal" id={props.index.toString()}>
        <div className="modal-content">
          <span className="close" onClick={() => { document.getElementById(props.index.toString()).style.display = "none"; }}> &times;</span>
          <p id="description">{props.description}</p>
        </div>
      </div>
      <p><b>Tech Used:</b><br />{props.techStack}</p>
      <a href={props.link} target="_blank" rel="noReferrer">Link to {props.name}</a>
    </div>
  )
}

export default Projects;
