import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Project from './components/Project'
import About from './components/About'

function App() {
  return (
    <Router>
      <div className="flex flex-col h-full">
        <Navbar></Navbar>
        <Switch>
          <Route path="/experience" component={Experience}></Route>
          <Route path="/project" component={Project}></Route>
          <Route path="/about" component={About}></Route>
        <Experience></Experience>
        <hr />
        <Project></Project>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>


  );
}

export default App;
