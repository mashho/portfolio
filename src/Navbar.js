import './Navbar.css'
import React from 'react'

const  Navbar=()=> {
    

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <h2>Portfolio</h2>
                </div>

                <div className="option">
                    <ul className="list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Resume</li>
                        <li>Contact</li>

                    </ul>
                </div>

            </div>
            
        </>
    )
}

export default Navbar;