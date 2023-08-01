// import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
// import { Link } from 'react-router-dom'
// import { a } from "react-router-dom/cjs/react-router-dom";

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-a" href="/">About</a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
          {/* <div className="dropdown mx-4">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Colored Background
            </button>
            {/* <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={props.changegreen} href="#">Green</a></li>
              <li><a className="dropdown-item" onClick={props.changered} href="#">Red</a></li>
              <li><a className="dropdown-item" onClick={props.changeyellow} href="#">Yellow</a></li>
            </ul> */}
          {/* </div> */} 
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
      </div>
    </nav>
  )
}
