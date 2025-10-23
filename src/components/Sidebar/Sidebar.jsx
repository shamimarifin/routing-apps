import React from 'react'
import { Link } from 'react-router'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <aside>
        <nav className='sidebar'>
            <Link>Sidebar - 1</Link>
            <Link>Sidebar - 2</Link>
            <Link>Sidebar - 3</Link>
            <Link>Sidebar - 4</Link>
            <Link>Sidebar - 5</Link>
       
        </nav>
    </aside>
  )
}

export default Sidebar