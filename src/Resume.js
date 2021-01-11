import React from 'react'
import './Resume.css'
import resume1 from './image/Resume1.jpg'
import resume2 from './image/Resume2.jpg'
import { Link } from 'react-router-dom'
const Resume=()=> {
    return (
        <div>
            <div className="container my-5 py-5">
            <h1>Resume .</h1>
                <div className="row my-5 py-5">
                    <div className="col-sm-12 col-md-6 col-xl-6">
                        <img src={resume1} alt="" className="pic"/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-6">
                        <img src={resume2} alt="" className="pic"/>
                    </div>

                    
                    <h2 className="mt-3">Link of Resume 👉 :- <a href="https://s.docworkspace.com/d/AKLYP6OEnJIt6ZfMyOadFA">Link</a></h2>
                </div>
                <Link to="/contact" className="but mx-2">Contact</Link>
                <Link to="/project" className="but">Projects</Link>
            </div>
        </div>
    )
}

export default Resume
