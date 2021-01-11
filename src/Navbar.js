import './Navbar.css'
import React from 'react'
import {Link} from 'react-router-dom'
const  Navbar=()=> {
    

    return (
        <>
            
            <nav className=" fixed-top navbar navbar-expand-lg navbar-dark bg-dark " >
                <div className="container">
                    <div className="container-fluid">
                        <h1 className="navbar-brand logo" >PORTFOLIO</h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link className="nav-link link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link link " aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link link " aria-current="page" to="/project">Projects</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link link " aria-current="page" to="/resume">Resume</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link link " aria-current="page" to="/contact">Contact</Link>
                            </li>
                            
                            
                        </ul>
                        
                        </div>
                    </div>
                </div>
            </nav>
        
        </>
    )
}

export default Navbar;