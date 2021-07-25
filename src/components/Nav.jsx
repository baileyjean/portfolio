import '../styles/App.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
// import logo from '../styles/images/nerdyNomad-smol-logoProto4.png'

const NavBar = () => {
  //////////////////////// FUNCTIONS ////////////////////////

  const openNav = () => {
    document.getElementById("side-nav").style.width = "20em";
    document.getElementById("open-nav").style.marginLeft = "20em";
  }

  const closeNav = () => {
    document.getElementById("side-nav").style.width = "0";
    document.getElementById("open-nav").style.marginLeft = "0";
  }

  //////////////////////// FRONT-END RETURN ////////////////////////
  return (
    <div>
      <span id="open-nav" style={{ cursor: "pointer" }} onClick={openNav}>&#9776;</span>
      <div id="side-nav" className="nav">
        <button className="close-nav" onClick={closeNav}>X</button>
        {/* <img src={logo} alt={"Nerdy Nomad Logo"} style={{ width: '100%' }} /> */}
        <nav>
          <span><NavLink style={{ textDecoration: 'none', color: 'white', textShadow: '2px 2px 4px #000000' }} to={"/"}>Bailey Codes</NavLink></span>
          <span><NavLink style={{ textDecoration: 'none', color: 'white', textShadow: '2px 2px 4px #000000' }} to="/drop-me-a-line">Contact Me</NavLink></span>
        </nav>
      </div>
    </div>
  )
}
export default NavBar;
