import React from 'react'

const Home = (props) => {

  return (
    <div className="intro">
      <h1>BaileyCodes</h1>
      <h2>{props.name}</h2>
    </div>
  )
}

export default Home