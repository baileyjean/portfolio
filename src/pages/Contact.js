import React from 'react'
import bailey from '../styles/images/happyBailey.jpg'

const Contact = () => {

  return (
    <div className="pages">
      <div className="contact-page">
        <h1>Let's Connect!</h1>
        <img src={bailey} alt=""/>
        <br />
        <span>
          <a href="https://www.linkedin.com/in/baileyleavitt/">LinkedIn</a> | <a href="mailto: baileyjleavitt@gmail.com">Email</a> | <a href="https://github.com/baileyjean">GitHub</a>
        </span>
      </div>
    </div>
  )
}

export default Contact