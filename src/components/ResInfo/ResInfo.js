
import React, { Component } from 'react';
import './ResInfo.css';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Modal from '@material-ui/core/Modal';
import Info from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';

class ResInfo extends Component {

    state = {
        open: false,
      };
    
      handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

  render() {
    
    return (
        <div>
        <IconButton onClick={this.handleOpen}>
            <Info />
        </IconButton>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className="modalSheet">
            <div className="modalInside">
              <Typography variant="title" id="modal-title">
                Additional Information
              </Typography>
              <Divider />
              <h5>Personal Bio</h5>
              <Typography variant="subheading" id="simple-modal-description">
                {this.props.profile.bio}
              </Typography>
              <Divider />
              <h5>Email Address:</h5>
              <a href={"mailto:"+this.props.profile.email}>{this.props.profile.email}</a>
              <Divider />
              <h5>GitHub Account:</h5>
              <a href={ "https://github.com/" + this.props.profile.github_name } target="_blank">{this.props.profile.github_name}</a>
            </div>
          </div>
        </Modal>
        </div>
    );
  }
}

export default ResInfo;