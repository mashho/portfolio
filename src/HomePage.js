import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import pic from './image/pic.png'
const  Homepage=()=> {
    

    return (
        <>
            
            <div className="container cont my-5">
                <div className="jumbotron ">
                    <div className="welcome ">
                        
                        <div className="row">
                            <div className="col-sm-12 col-md-7 col-xl-7">
                                <h5>Hello <span style={{fontSize:40}}>🚀🚀🚀</span></h5>
                                <h2>Welcome to my <span className="name">Porfolio</span>.</h2>
                                <h1>I'm <span className="name">Mashhood</span> Ahmad Danish.</h1>
                                <br/><h2>5 🌟 (problem solving) Hacker Rank.</h2>
                                <h2>Follow me on Linkedin 👉 <a href="https://www.linkedin.com/in/mashhood-ahmad-danish-06916b1b2/" target="_">Follow on Linkedin </a></h2>
                                <br/>
                                <Link to="/about" className="but">More About Me</Link>
                            </div>
                            <div className="col-sm-12 col-md-5 col-xl-5 my-5">
                                <img className="pic" src={pic} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="buttons ">
                            <div className="row">
                                <div className="col-sm-6 col-md-3 col-xl-3">   
                                <Link classname="ext mx-2" to="/about">About</Link>
                                <Link classname="ext mx-2" to="/resume">Resume</Link>
                                <Link classname="ext mx-2" to="/contact">Contact</Link>
                                </div>
                            </div>
                        </div>
            </div>
            
        </>
    )
}

export default Homepage;