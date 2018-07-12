import React, { Component } from 'react';
import './ResHeader.css';

class ResHeader extends Component {

  render() {

    return (
        <div className="container">
          <div className="nameOverlay">
            <h1 className="headText">Deric Aaron</h1>
          </div>
          <img src="https://ghchart.rshah.org/DericAaron" alt="" className="headerImg"/>
        </div>

    );
  }
}

export default ResHeader;