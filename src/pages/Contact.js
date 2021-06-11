import React from 'react'

const Contact = (props) => {

  return (
    <div className="contact">
      <h1>Drop Me A Line</h1>
      <h2>{props.name}</h2>
    </div>
  )
}

export default Contact