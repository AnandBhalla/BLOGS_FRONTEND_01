import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation();
  return (
    <div>
     <nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="/"><b>MY BLOGS.com</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`} aria-current="page" to="/blogs">BLOGS</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname === '/writeblog' ? 'active' : ''}`} aria-current="page" to="/writeblog">NEW BLOG</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
