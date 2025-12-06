import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go home</Link>
      {/* Style this page as needed */}
    </div>
  )
}

export default NotFound
