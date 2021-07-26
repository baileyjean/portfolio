import React from 'react';
import dogecoin from '../styles/images/dogecoin.png'
import retriever from '../styles/images/retriever.png'
import nerdyNomad from '../styles/images/nerdyNomad.png'

const Projects = () => {
  return (
    <div className="project-card">
      <div id="project-single">
        <h2>NERDY NOMAD</h2>
        <p>Image go here</p>
        <p>Project Description</p>
        <p>Project Stack</p>
      </div>
      <div id="project-single">
        <h2>RETRIEVER</h2>
        <img src={retriever} alt="Retriever the App" />
        <p>Project Description</p>
        <p>Project Stack</p>
      </div>
      <div id="project-single">
        <h2>RARE POKEDEX</h2>
        <p>Image go here</p>
        <p>Project Description</p>
        <p>Project Stack</p>
      </div>

      <div id="project-single">
        <h2>DOGECOIN THE GAME</h2>
        <p>Image go here</p>
        <p>Project Description</p>
        <p>Project Stack</p>
      </div>
      <div id="project-single">
        <h2>SUPER SMASH BROS</h2>
        <p>Image go here</p>
        <p>Project Description</p>
        <p>Project Stack</p>
      </div>
      <div id="project-single">
        <h2>MIDWAY MADNESS</h2>
        <p>Image go here</p>
        <p>Project Description</p>
        <p>Project Stack</p>
      </div>
    </div>
  )
}

export default Projects;
