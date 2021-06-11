import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/what-you-came-here-for">Projects</NavLink>
          <NavLink to="/obligatory-about-page">Bio</NavLink>
          <NavLink to="/drop-me-a-line">Contact</NavLink>
        </div>
      </nav>
    );
  }
}