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

        {/* card area for testing */}
        <div className="card">
          <div className="card-header">
            <h5>Project Name</h5>
            <br/>
            <div>
              <button>Source</button>
              <button>Git</button>
            </div>
            
          </div>

          <img src="https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2017/07/main/slow-cooker_pork_tacos_with_fresh_tomato_salsa_2487601_summe_0064.jpg?itok=Xdg39X7i" alt=""/>

          <div className="description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et obcaecati vel pariatur cupiditate quia ratione porro deleniti, unde sunt quae aspernatur temporibus voluptate laudantium dolorem expedita consequatur ea? Corporis, debitis?</p>
          </div>
        </div> 
        
      </div>
    );
  }
}

export default App;
