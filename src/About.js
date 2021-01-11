import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import pic from './image/pic.png'
const About=() =>{
    return (
        <>
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-xl-6 my-5">
                                <h1>Hello<br/>myself,  Mashhood Ahmad Danish. I am currently persuing my B.Tech from <span>Haldia Institue of Technology</span>
                                . I will complete my B.Tech in 2022.<br/> I am a <span>Web Developer</span> and a <span>Data Analyst.</span> </h1>
                                <h4 className="my-5">After going through my Resume you will get to know more about me. </h4>
                                

                                <Link to="/resume" className="but">Resume</Link><br/><br/><br/><br/>
                                <h4>Know about my different Projects.</h4><br/>
                                <Link to="/project" className="but">Projects</Link>
                            </div>
                            
                            <div className="col-sm-12 col-md-6 col-xl-6 my-5">
                            <div className="card">
                                <img src={pic} className="card-img-top pict" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Mashhood </h5>
                                    <p className="card-text">Contact no:- 7295086518<br/>Living in :- Munger,Bihar PO-811201</p>

                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Language Known:<br/>1.<a href="https://docs.python.org/3/">Python</a><br/>2.<a href="https://docs.oracle.com/en/java/">JAVA</a><br/>3.<a href="https://kotlinlang.org/">Kotlin</a><br/>4.<a href="https://devdocs.io/c/">C</a></li>
                                    <li className="list-group-item">Front-end Framework:<br/>1.<a href="https://devdocs.io/html/">HTML</a><br/>2.<a href="https://devdocs.io/css/">CSS</a><br/>3.<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JS</a><br/>4.<a href="https://reactjs.org/docs/getting-started.html">React Js</a><br/>5.<a href="https://getbootstrap.com/">Bootstrap</a><br/>6.<a href="https://tailwindcss.com/">Tailwind CSS</a></li>
                                    <li className="list-group-item">Backend :<br/>1.<a href="https://nodejs.org/en/docs/">Node js</a><br/>2.<a href="https://expressjs.com/">Express Js</a><br/>3.<a href="https://docs.djangoproject.com/en/3.1/">Django</a></li>
                                    <li className="list-group-item">Data Science with Python<br/>
                                        Machine Learning :- Linear Regression<br/>Logictic Regression<br/>KNN <br/>NLP
                                    </li>
                                </ul>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons ">
                            <div className="row">
                                <div className="col-sm-6 col-md-3 col-xl-3">
                                <Link classname="ext mx-2" to="/">Home</Link>     
                                <Link classname="ext mx-2" to="/resume">Resume</Link>
                                <Link classname="ext mx-2" to="/contact">Contact</Link>
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
        </>
    )
}

export default About
