import React from 'react'
import bailey from '../styles/images/happyBailey.jpg'
import github from '../styles/images/github.png'
import linkedin from '../styles/images/linkedin.png'
import emailMe from '../styles/images/emailMe.png'

const Contact = () => {

  return (
    <div className="pages">
      <div className="contact-page">
        <h1>Let's Connect!</h1>
        <img src={bailey} alt="Me being absolutely awesome at the Sanford Underground Research Facility"/>
        <br />
        <span>
          <a href="https://www.linkedin.com/in/baileyleavitt/"><img src={linkedin} alt="linkedin profile" style={{width: "4em"}} /></a>
          <a href="mailto: baileyjleavitt@gmail.com"><img src={emailMe} alt="email me here" style={{width: "4em"}} /></a>
          <a href="https://github.com/baileyjean"><img src={github} alt="check out my GIT repos here" style={{width: "4em"}} /></a>
        </span>
      </div>
    </div>
  )
}

export default Contact