import React, { Component } from 'react';
import HomePage from './components/homepage'
import Nav from './components/nav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HomePage />
      </div>
    );
  }
}

export default App;
