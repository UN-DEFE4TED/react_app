import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">about</Link>
        </li>
        </ul>
        <div className="form-check form-switch">
          <input onClick={props.toggle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{cursor: 'pointer'}} />
          <label className={`form-check-label text-${props.theme==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
//set prop Types
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
//set default value for props 
Navbar.defaultProps = {
    title: "set title here",
    aboutText: "about text here"
}