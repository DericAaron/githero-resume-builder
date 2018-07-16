import React, { Component } from 'react';
import './ResHeader.css';
import AvatarImage from '../AvatarImage/AvatarImage';
import ResInfo from '../ResInfo/ResInfo';

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
            
            <p>{this.props.profile.email}</p>
            </div>
          </div>
            
          </div>
          <div className="imageFrame">
          <img src={"https://ghchart.rshah.org/"+this.props.profile.github_name} alt="" className="headerImg"/>
          </div>
          <ResInfo profile={this.props.profile}/>
        </div>
    );
  }
}

export default ResHeader;
