import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      {/* Add more links here */}
    </nav>
  )
}

export default Navigation
