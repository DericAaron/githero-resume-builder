import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import Project from '../Project/Project';
import ResHeader from '../ResHeader/ResHeader';
import Header from '../Header/Header';

class App extends Component {

  render() {

    return (
      <div className="App">
      
        <Header />
        <ResHeader />
        
        <br/>
        <br/>

        <Project />
        
      </div>
    );
  }
}

export default App;
