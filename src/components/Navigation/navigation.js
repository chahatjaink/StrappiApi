import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'


const Navigation = () => {
  return (
    <div>
        <nav>
    <ul>
      <li>
        <Link className="link" to="/">Login</Link>
      </li>
      <li>
        <Link className="link" to="/signup">Signup</Link>
      </li>
      <li>
        <Link className="link" to="/posts">Feed</Link>
      </li>
      <li>
        <Link className="link" to="/create">Book</Link>
      </li>
    </ul>
  </nav>
  </div>
  )
}

export default Navigation