import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {

  
  Link,

} from 'react-router-dom'
const Navbar = (props) =>{


  //  sample = () => { 
    
  // }

  
  



    
    

    return (
      <div className={`bg-${props.mode}`}>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}-props.mode`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MyNewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link/></li> */}
                
          <li className="nav-item "> <Link className="nav-link" to="/business">Business</Link>  </li>
          <li className="nav-item "><Link className="nav-link" to="/entertainment"> Entertainment </Link>  </li>
          {/* <li className="nav-item "><Link className="nav-link" to="/general"> General  </Link></li> */}
          <li className="nav-item "><Link className="nav-link" to="/health"> Health </Link></li>
          <li className="nav-item "><Link className="nav-link" to="/science"> Science</Link> </li>
          <li className="nav-item "><Link className="nav-link" to="/sports"> Sports </Link></li>
          <li className="nav-item "><Link className="nav-link" to="/technology"> Technology </Link></li>
        
      </ul>
     
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input "onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label label-${props.mode ==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault"> Enable {props.mode==='light'?'dark':'light'} mode</label>
</div>
          </div>
     
        </nav>
    
      </div>
    )
  }


export default Navbar
