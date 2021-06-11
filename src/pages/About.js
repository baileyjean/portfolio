import React from 'react'

const About = (props) => {

  return (
    <div className="about">
      <h1>The Obligatory Bio Page</h1>
      <h2>{props.name}</h2>
    </div>
  )
}

export default About