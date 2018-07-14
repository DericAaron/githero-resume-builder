import React, { Component } from 'react';
import './ResHeader.css';
import AvatarImage from '../AvatarImage/AvatarImage';

class ResHeader extends Component {

  render() {

    return (
        <div className="container">
          <div className="nameOverlay">

          <div className="overContainer">
            <div id="holder">
            <AvatarImage />
            </div>
            <div className="headText">
            <h1>{this.props.profile.resume_name}</h1>
            <p>Email: {this.props.profile.email}</p>
            </div>
          </div>
            
          </div>
          <img src={"https://ghchart.rshah.org/"+this.props.profile.github_name} alt="" className="headerImg"/>
        </div>
    );
  }
}

export default ResHeader;
