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
      <button className="myBtn" onClick={() => { document.getElementById(props.index.toString()).style.display = "block"; }}>Description</button>
      <div className="modal" id={props.index.toString()}>
        <div className="modal-content">
          <span className="close" onClick={() => { document.getElementById(props.index.toString()).style.display = "none"; }}> &times;</span>
          <p id="description">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Projects;
