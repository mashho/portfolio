import react from 'react'
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './HomePage';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      {/* body */}
      <Switch>
        <Route exact path="/">
            <Homepage />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/project">
            <Projects />
        </Route>
        <Route path="/resume">
            <Resume />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
    </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
