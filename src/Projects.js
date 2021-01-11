import React from 'react'
import pic from "./image/django.jpg"
import pic1 from "./image/django1.png"
import pic2 from "./image/django2.png"
import pic3 from "./image/django3.png"
import pic4 from "./image/django4.png"
import pic5 from "./image/django5.png"
import pic6 from "./image/kotlin.jpg"
import pic7 from "./image/cert1.JPG"
import and1 from "./image/and1.jpg"
import and2 from "./image/and2.jpg"
import and3 from "./image/and3.jpg"
import certAnd from "./image/certAnd.jpeg"
import and4 from "./image/and4.jpg"
import and5 from "./image/and5.jpg"
import and6 from "./image/and6.jpg"
import spotify from "./image/spotify.png"
import netflix from "./image/netflix.png"
import logo from "./logo.svg"
import './Projects.css'
import { Link } from 'react-router-dom'
const Projects=()=> {
    return (
        <div className="projects my-5 py-5">
            <div className="firstproject">
                <div className="container">
                <h1>Projects</h1>
                    <div className="jumbotron">
                    <div className="card mb-3 py-3 px-5" >
                    <h4 className="my-3">Project 1:-Pathology Lab Management System From Django</h4>
                        <img src={pic}className="card-img-top pict" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">1.</h5>
                            <p className="card-text">I have created a pathology lab management system from the <span>DJANGO</span> framework 
                            .In this software , when a new patient came to the LAB for the Test, the entry of that patient will be filled in the Form whose pic is given below whatever he/she want to do test , it will be saved in the database.
                             </p>
                        </div>
                        <img src={pic1}className="card-img-top " alt="..."/>
                        <div className="card-body">
                            
                            <p className="card-text">After the entry of the patient, the test result which get after analyzing by the LAB , according to that the result will be filled inside it . The picture given below is for the same .</p>
                        </div>
                        <img src={pic2}className="card-img-top " alt="..."/>
                        <br/>
                        <h6>Filling up the data</h6>
                        <img src={pic3}className="card-img-top " alt="..."/>
                        <div className="card-body">
                            
                            <p className="card-text">At last in the final all the reult test data will be stored in the presciption format and then after it will be printed in it and given it to the patient .</p>
                        </div>
                        <img src={pic5}className="card-img-top " alt="..."/><br/>
                        <img src={pic4}className="card-img-top " alt="..."/><br/><br/><br/>
                        <h3>Certificate of this whole project</h3>
                        <img src={pic7}className="card-img-top " alt="..."/><br/><br/><br/>
                        <h3>The link of the whole software i have uploaded on my youtube channel, you can also go through it <a target="_" href="https://www.youtube.com/watch?v=iOHNf1ePy_w">Click Here</a></h3>

                        </div>
                        <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Project 2. Food Order Android App with Kotlin.</h2><br/>
                            <p className="card-text">My first Android Application on online Food Ordering.... Internshala
Desc.....- In this app a user create his account ..after login.. A multiple Restaurants options he will get ..and then after selecting any restaurant from list.. He will go to next.. Then a food items menu will show.. After selecting and adding the food items to Cart then at last the final process of ordering the food which shows the list of items and total cost for all the items and finally the order takes place successfully
</p>
                        </div>
                        <img src={pic6} className="card-img-bottom" alt="..."/>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-xl-4 my-4">
                            <img src={and1} className="card-img-bottom and" alt="..."/>
                            </div>
                            <div className="col-sm-12 col-md-4 col-xl-4 my-4">
                            <img src={and2} className="card-img-bottom and" alt="..."/>
                            </div>
                            <div className="col-sm-12 col-md-4 col-xl-4 my-4">
                            <img src={and3} className="card-img-bottom and" alt="..."/>
                            </div>
                            <div className="col-sm-12 col-md-4 col-xl-4 my-4">
                            <img src={and4} className="card-img-bottom and" alt="..."/>
                            </div>
                            <div className="col-sm-12 col-md-4 col-xl-4 my-4">
                            <img src={and5} className="card-img-bottom and" alt="..."/>
                            </div>
                            <div className="col-sm-12 col-md-4 col-xl-4 my-4">
                            <img src={and6} className="card-img-bottom and" alt="..."/>
                            </div>
                            
                            
                        </div>
                        <h1>The certificate of full training.</h1><br/>
                            <img src={certAnd} className="card-img-bottom " alt="..."/>

                    </div>
                    <div class="card mb-3 py-3 px-5" >
                    <h4 className="my-3">Project 3:-Netfix Clone (Frontend with React)</h4>
                        <img src={logo}className="card-img-top  rotate" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">1.</h5>
                            <p className="card-text">Successfully completed Fully responsive Frontend of Netflix-Clone.
The link for this beautyfull netflix clone</p><h2>Click here 👉 <a href="https://netflix-clone-777fd.web.app/" target="_">Netflix Clone Link</a></h2>
                        </div>
                        <img src={netflix}className="card-img-top " alt="..."/>
                        
                        </div>
                    <div class="card mb-3 py-3 px-5 " >
                    <h4 className="my-3">Project 4:-Spotiify Clone (Frontend with React)</h4><hr/>
                        <img src={logo}className="card-img-top mx-5  rotate" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">1.</h5>
                            <p className="card-text">Successfully completed Fully responsive Frontend of Spotify Music-Clone.Authentication from real spotify app.
The link for this beautyfull Spotify clone</p><h2>Click here 👉 <a href="https://www.linkedin.com/posts/mashhood-ahmad-danish-06916b1b2_spotifyclone-react-reactjs-activity-6745371792849948672-673M" target="_">Spotify Clone work vedio Link</a></h2>
                        </div>
                        <img src={spotify}className="card-img-top " alt="..."/>
                        
                        </div>
                        <div className="buttons ">
                            <div className="row">
                                <div className="col-sm-6 col-md-3 col-xl-3">
                                <Link classname="ext mr-2" to="/">Home</Link>
                                <Link classname="ext mr-2" to="/about">About</Link>
                                <Link classname="ext mr-2" to="/contact">Contact</Link>
                                <Link classname="ext mr-2" to="/resume">Resume</Link>
                                </div>
                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Projects
