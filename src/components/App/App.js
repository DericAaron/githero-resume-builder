import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <h1 className="App-title">GitHero</h1>
        </header>

        <br/>
        <div className="container">
          <div className="nameOverlay">
            <h1 className="headText">Deric Aaron</h1>
          </div>
          <img src="https://ghchart.rshah.org/DericAaron" alt="" className="headerImg"/>
        </div>
        
        <br/>
        <br/>
        <div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        
      </div>
    );
  }
}

export default App;
