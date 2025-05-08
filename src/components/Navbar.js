import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) { return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto p-2 p-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">{props.Home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">{props.About}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control p-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav></>
  );}
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired,Home: PropTypes.string.isRequired
};
Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About here'
};