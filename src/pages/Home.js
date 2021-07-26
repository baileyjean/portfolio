import React, { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/App.css'
import dogecoin from '../styles/images/dogecoin.png'
import retriever from '../styles/images/retriever.png'
import nerdyNomad from '../styles/images/nerdyNomad.png'

const Home = (props) => {
  const topRef = useRef()
  const introRef = useRef()
  const projectRef = useRef()
  const skillRef = useRef()
  const eduRef = useRef()
  const resumeRef = useRef()
  const superSmashBros = <iframe src="https://player.vimeo.com/video/579546505?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="300" height="266" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Smash Bros Python3 OOP CLI Game - With AWESOME Music!"></iframe>
  const rarePokedex = <iframe src="https://player.vimeo.com/video/579560107?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="350" height="202" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Rare Pokedex: Flaskathon Fullstack Project"></iframe>
  const midwayMadness = <iframe src="https://player.vimeo.com/video/579544307?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="300" height="266" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Midway Madness - A Fun, Creative Python3 CLI Game"></iframe>
  const projects = [
    {
      name: 'NERDY NOMAD', 
      media: <img src={nerdyNomad} alt="Nerdy Nomad logo" />, 
      description: '', 
      techStack: 'PostgreSQL/Express/React/Node.js', 
      link: 'https://nerdy-nomad.herokuapp.com/'
    },
    {
      name: 'RETRIEVER', 
      media: <img src={retriever} alt="Retriever the App screenshot" />, 
      description: '', 
      techStack: 'PostgreSQL/Express/React/Node.js', 
      link: 'https://retriever-app.herokuapp.com/'
    },
    {
      name: 'DOGECOIN THE GAME', 
      media: <img src={dogecoin} alt="Dogecoin the Game logo" />, 
      description: '', 
      techStack: 'VanillaJS/HTML5/CSS3', 
      link: 'http://dogecoin-the-game.surge.sh/'
    },
    {
      name: 'SUPER SMASH BROS', 
      media: superSmashBros, 
      description: 'This is an Object-Oriented Python3 CLI game I created for one of my weekend homeworks in GA. Be sure to turn the volume up as you watch the video so you can hear the awesome music track I added to the game! It plays automatically when the user starts the game through the terminal. I accomplished all this after about 3 days of learning Python, and had SO much fun with it! Definitely one of my favorite homeworks from the entire bootcamp.',
      techStack: 'Python (Object-Oriented)',
      link: 'https://github.com/baileyjean/u4_hw_python_smash_bros'
    },
    {
      name: 'RARE POKEDEX', 
      media: rarePokedex, 
      description: 'My partner Brady and I created this fullstack Flask app during an 18-hour Flaskathon in July 2021. I created the backend in just a few hours while Brady got our frontend built-out (that man is an absolute speed-demon when it comes to coding). Then we coordinated and rocked the frontend together! (Most of my frontend work can be seen on the browse results page and the user profile pages.) We had so much fun with this project and had a fun time presenting it at the end of our Flaskathon!',
      techStack: 'Flask/Express/React/Node.js',
      link: 'https://github.com/baileyjean/rare-pokedex'
    },
    {
      name: 'MIDWAY MADNESS', 
      media: midwayMadness, 
      description: 'This is a Choose Your Own Adventure Python3 CLI game I created for one of my weekday homeworks in GA. The concept and code were all created and written in one night.', 
      techStack: 'Python',
      link: 'https://github.com/baileyjean/u4_hw_python_adventure'
    }
  ]

  return (
    <div ref={topRef} className="pages">
      <h1>BaileyCodes</h1>
      <div ref={introRef} className="intro">
        <h2>Welcome</h2>
        <p>Just my luck, no ice. You know what? It is beets. I've crashed into a beet truck. Do you have any idea how long it takes those cups to decompose. Checkmate... This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Yes, Yes, without the oops!</p>
        <p>Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Must go faster. Hey, you know how I'm, like, always trying to save the planet? Here's my chance.</p>
        <p>Checkmate... I was part of something special. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Must go faster... go, go, go, go, go! Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
        <p>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops! Yes, Yes, without the oops! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!</p>
        <p>Must go faster. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? I was part of something special. You know what? It is beets. I've crashed into a beet truck. Remind me to thank John for a lovely weekend. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
        <br />
        <span>Check out my projects below!</span>
        <button onClick={() => projectRef.current.scrollIntoView({behavior: 'smooth'})}>&#8595;</button>
      </div>
      <div ref={projectRef} className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          {projects.map((project, index) => (
            <ProjectCard 
              {...props}
              key={index}
              name={project.name}
              media={project.media}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
            />
          ))}
        </div>
        <br />
        <button onClick={() => skillRef.current.scrollIntoView({behavior: 'smooth'})}>&#8595;</button>
      </div>
      <div ref={skillRef} className="skills">
        <h2>Skills</h2>
        <p>Just my luck, no ice. You know what? It is beets. I've crashed into a beet truck. Do you have any idea how long it takes those cups to decompose. Checkmate... This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Yes, Yes, without the oops!</p>
        <p>Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Must go faster. Hey, you know how I'm, like, always trying to save the planet? Here's my chance.</p>
        <p>Checkmate... I was part of something special. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Must go faster... go, go, go, go, go! Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
        <p>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops! Yes, Yes, without the oops! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!</p>
        <p>Must go faster. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? I was part of something special. You know what? It is beets. I've crashed into a beet truck. Remind me to thank John for a lovely weekend. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
        <br />
        <button onClick={() => eduRef.current.scrollIntoView({behavior: 'smooth'})}>&#8595;</button>
      </div>
      <div ref={eduRef} className="education">
        <h2>Education</h2>
        <p>Just my luck, no ice. You know what? It is beets. I've crashed into a beet truck. Do you have any idea how long it takes those cups to decompose. Checkmate... This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Yes, Yes, without the oops!</p>
        <p>Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Must go faster. Hey, you know how I'm, like, always trying to save the planet? Here's my chance.</p>
        <p>Checkmate... I was part of something special. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Must go faster... go, go, go, go, go! Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
        <p>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops! Yes, Yes, without the oops! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!</p>
        <p>Must go faster. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? I was part of something special. You know what? It is beets. I've crashed into a beet truck. Remind me to thank John for a lovely weekend. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
        <br />
        <button onClick={() => resumeRef.current.scrollIntoView({behavior: 'smooth'})}>&#8595;</button>
      </div>
      <div ref={resumeRef} className="resume">
        <h2>Resume & Downloads</h2>
        <p>Just my luck, no ice. You know what? It is beets. I've crashed into a beet truck. Do you have any idea how long it takes those cups to decompose. Checkmate... This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Yes, Yes, without the oops!</p>
        <p>Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Must go faster. Hey, you know how I'm, like, always trying to save the planet? Here's my chance.</p>
        <p>Checkmate... I was part of something special. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Must go faster... go, go, go, go, go! Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
        <p>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Yes, Yes, without the oops! Yes, Yes, without the oops! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!</p>
        <p>Must go faster. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? I was part of something special. You know what? It is beets. I've crashed into a beet truck. Remind me to thank John for a lovely weekend. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?</p>
        <br />
        <button onClick={() => topRef.current.scrollIntoView({behavior: 'smooth'})}>&#8593;</button>
      </div>
    </div>
  )
}

export default Home;