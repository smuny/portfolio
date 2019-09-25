import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <div>
      <Link to="/aboutme">About Me</Link><br/>
      <Link to="/resume">Resume</Link><br/>
      <Link to="/projects">Projects</Link><br/>
      <Link to="/contact">Contact</Link><br/>
    </div>
  )
}
export default NavBar;