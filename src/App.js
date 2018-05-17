import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import EditProfile from './components/edit-profile'
import DogMap from './components/map'
import HomePage from './components/homepage'
import Login from './components/login'
import Nav from './components/nav'
import Profile from './components/profile'
import './App.css';

class App extends Component {
  render() {
    return (
   	<Router>
      <div className="App">
        <Nav />
        <main role="main">
        	<Route exact path="/" component={HomePage} />
        	<Route exact path="/profile" component={Profile} />
        	<Route exact path="/edit-profile" component={EditProfile} />
        	<Route exact path="/login" component={Login} />
        	<Route exact path="/map" component={DogMap} />
        </main> 
      </div>
    </Router> 
    );
  }
}

export default App;
