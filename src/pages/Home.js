import React, { useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/App.css'
import dogecoin from '../styles/images/dogecoin.png'
import retriever from '../styles/images/retriever.png'
import nerdyNomad from '../styles/images/nerdyNomad.png'
import resume from '../styles/downloads/LeavittBailey-Resume-2021.pdf'
import skillz from '../styles/images/skillz.png'

const Home = (props) => {
  const topRef = useRef()
  const introRef = useRef()
  const projectRef = useRef()
  const skillRef = useRef()
  const resumeRef = useRef()
  const superSmashBros = <iframe src="https://player.vimeo.com/video/579546505?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="300" height="266" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Smash Bros Python3 OOP CLI Game - With AWESOME Music!"></iframe>
  const rarePokedex = <iframe src="https://player.vimeo.com/video/579560107?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="300" height="173" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Rare Pokedex: Flaskathon Fullstack Project"></iframe>
  const midwayMadness = <iframe src="https://player.vimeo.com/video/579544307?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="300" height="266" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Midway Madness - A Fun, Creative Python3 CLI Game"></iframe>
  const projects = [
    {
      name: 'NERDY NOMAD', 
      media: <img src={nerdyNomad} alt="Nerdy Nomad logo" />, 
      description: `Nerdy Nomad is a resource web-app helping Users connect with a science center in all 50 United States (and DC). Users can create profiles--secured by Authentication--then comment and rate science centers they have visited. Users get a Nerd Rating based on the number of science centers they've visited, and a Nomad Rating based on the number of states they've visited. If their Nerd and Nomad ratings are sufficiently high, Users can earn the Nerdy Nomad badge and display it on their profile!`, 
      techStack: 'PostgreSQL/Express/React/Node.js',
      gitHub: 'https://github.com/baileyjean/nerdynomad',
      link: 'https://nerdy-nomad.herokuapp.com/'
    },
    {
      name: 'RETRIEVER', 
      media: <img src={retriever} alt="Retriever the App screenshot" />, 
      description: `Retriever is a web-app for posting and retrieving rescue animals, with a specific focus on exotic pets. While current apps on the market serve a similar purpose to Retriever, those apps are primarily marketed towards the most common pets: cats and dogs. Our app is going to fill a void in the market by serving underappreciated pets!`, 
      techStack: 'PostgreSQL/Express/React/Node.js',
      gitHub: 'https://github.com/baileyjean/retrieverApp',
      link: 'https://retriever-app.herokuapp.com/'
    },
    {
      name: 'DOGECOIN THE GAME', 
      media: <img src={dogecoin} alt="Dogecoin the Game logo" />, 
      description: `Dogecoin the Game is a web-based browser board game, created for my Unit 1 capstone project in General Assembly's Software Engineering Immersive bootcamp. The game has 20 spaces, a 4-sided dice, and an 84-card "Doge Deck" with six distinct card types. To win, you must reach your profit goal, have a non-zero bank account, and have at least one remaining life by the time you get back to square 1. On each turn, you pull one of the cards from the Doge Deck. Stats are updated after each dice roll. The game uses a fun combination of "doge-speak" and topical meme-references throughout the user's experience. Full descriptions of the six different cards can be found on the landing page for the game!`, 
      techStack: 'VanillaJS/HTML5/CSS3',
      gitHub: 'https://github.com/baileyjean/dogecoin-the-game',
      link: 'http://dogecoin-the-game.surge.sh/'
    },
    {
      name: 'SUPER SMASH BROS', 
      media: superSmashBros, 
      description: 'This is an Object-Oriented Python3 CLI game I created for one of my weekend homeworks in GA. Be sure to turn the volume up as you watch the video so you can hear the awesome music track I added to the game! It plays automatically when the user starts the game through the terminal. I accomplished all this after about 3 days of learning Python, and had SO much fun with it! Definitely one of my favorite homeworks from the entire bootcamp.',
      techStack: 'Python (Object-Oriented)',
      gitHub: 'https://github.com/baileyjean/u4_hw_python_smash_bros',
      link: 'https://github.com/baileyjean/u4_hw_python_smash_bros'
    },
    {
      name: 'RARE POKEDEX', 
      media: rarePokedex, 
      description: 'My partner Brady and I created this fullstack Flask app during an 18-hour Flaskathon in July 2021. I created the backend in just a few hours while Brady got our frontend built-out (that man is an absolute speed-demon when it comes to coding). Then we coordinated and rocked the frontend together! (Most of my frontend work can be seen on the browse results page and the user profile pages.) We had so much fun with this project and had a fun time presenting it at the end of our Flaskathon!',
      techStack: 'Flask/Express/React/Node.js',
      gitHub: 'https://github.com/baileyjean/rare-pokedex',
      link: 'https://github.com/baileyjean/rare-pokedex'
    },
    {
      name: 'MIDWAY MADNESS', 
      media: midwayMadness, 
      description: 'This is a Choose Your Own Adventure Python3 CLI game I created for one of my weekday homeworks in GA. The concept and code were all created and written in one night.', 
      techStack: 'Python',
      gitHub: 'https://github.com/baileyjean/u4_hw_python_adventure',
      link: 'https://github.com/baileyjean/u4_hw_python_adventure'
    }
  ]

  return (
    <div ref={topRef} className="pages">
      <h1>BaileyCodes</h1>
      <h2 style={{textShadow: "0em 0em .2em #2affd1", fontSize: "32px", margin: "0", padding: "0"}}>Bailey Leavitt - Junior Software Engineer</h2>
      <span>
        <button style={{fontSize: '12px'}} onClick={() => projectRef.current.scrollIntoView({behavior: 'smooth'})}>PROJECTS</button>
        <button style={{fontSize: '12px'}} onClick={() => skillRef.current.scrollIntoView({behavior: 'smooth'})}>SKILLS</button>
        <button style={{fontSize: '12px'}} onClick={() => resumeRef.current.scrollIntoView({behavior: 'smooth'})}>RESUME</button>
        {/* <button style={{fontSize: '12px'}} onClick={() => resumeRef.current.scrollIntoView({behavior: 'smooth'})}>BAILEY'S BIO</button> */}
      </span>
      <div ref={introRef} className="intro">
        <h2>Welcome</h2>
        <p>Welcome to my portfolio! You likely found me because I applied for a job with your company... if that's the case, congratulations! My minimalistic website is absolutely a callback to my MySpace profile from 2005, and every bit as edgy as I was then.</p>
        <p>Sincerely though, my hope is that my website is intuitive to navigate, and creates enough intrigue to entice you to call me in for an interview. </p>
        <br />
      </div>
      <div className="projects-container">
        <h2>Let's Get Right to the Good Stuff!</h2>
        <div ref={projectRef} className="project-card">
          {projects.map((project, index) => (
            <ProjectCard 
              {...props}
              key={index}
              index={index}
              name={project.name}
              media={project.media}
              description={project.description}
              techStack={project.techStack}
              gitHub={project.gitHub}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <br />
      <span>
        <button onClick={() => skillRef.current.scrollIntoView({behavior: 'smooth'})}>&#8595;</button>
        <button style={{fontSize: '12px'}} onClick={() => topRef.current.scrollIntoView({behavior: 'smooth'})}>Jump to the Top</button>
      </span>
      <h2 ref={skillRef}>Skills</h2>
      <img src={skillz} alt="" style={{width: "50%", borderRadius: "25px"}} />
      <div className="skills">
        <li>Data Analysis</li>
        <li>User Acceptance Testing</li>
        <li>Continuous Improvement</li>
        <li>Public Speaking</li>
        <li>Communication</li>
        <li>Training</li>
        <li>Team Management</li>
        <li>Leadership</li>
        <li>Experimental Design</li>
        <br />
        <span>
          <button onClick={() => resumeRef.current.scrollIntoView({behavior: 'smooth'})}>&#8595;</button>
          <button style={{fontSize: '12px'}} onClick={() => topRef.current.scrollIntoView({behavior: 'smooth'})}>Jump to the Top</button>
        </span>
      </div>
      <div ref={resumeRef} className="resume">
        <h2>Resume</h2>
        <iframe src={resume} width="100%" height="500px" title="Bailey's Resume"></iframe>
        <br />
        <button style={{fontSize: '12px'}} onClick={() => topRef.current.scrollIntoView({behavior: 'smooth'})}>Back to the Beginning</button>
      </div>
    </div>
  )
}

export default Home;