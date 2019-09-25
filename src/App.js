import React from 'react';
import './App.css';
import NavBar from './NavBar'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar />
      <h1>Sharon Mun's Portfolio</h1>
      <Switch>
        <Route path='/aboutme' component={AboutMe}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
