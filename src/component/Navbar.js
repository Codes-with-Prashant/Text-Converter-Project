import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'
import image from '../asserts/iconlogo.png'
import navstyle from './Navbar.module.css'

export default function Navbar(props) {
    return (
             <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className={`navbar-brand ${navstyle.fontnav}`} href="\">
      <img className="me-3" src={image} alt="logo"  height={30} width={30} />{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="\">Home</a>
          </li> */}
          {/* <li className="nav-item"> */}
            {/* <a className="nav-a" to="/about">{props.aboutText}</a> */}
          {/* </li> */}
        </ul>
        {/*<form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>*/}
        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"} me-3`}>
  <input className="form-check-input " onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
      
    )
}
Navbar.propTypes= {title:PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired}
Navbar.defaultProps={title:"Set Title Here", aboutText:"About Us"};