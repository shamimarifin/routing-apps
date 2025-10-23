import React from 'react'
import { Link, NavLink } from 'react-router'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <h1>My Header Area</h1>
      <nav>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/about">About</NavLink>
       <NavLink to="/blogs">Blogs</NavLink>
       <NavLink to="/apps">Apps</NavLink>
      </nav>
    </div>
  )
}

export default Header