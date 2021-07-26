import React, { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/App.css'

const Home = () => {
  const topRef = useRef()
  const introRef = useRef()
  const projectRef = useRef()
  const skillRef = useRef()
  const eduRef = useRef()
  const resumeRef = useRef()

  return (
    <div ref={topRef} className="pages">
      <h1>BaileyCodes</h1>
      <div ref={introRef} className="intro">
        <h2>Intro</h2>
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
        <ProjectCard />
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