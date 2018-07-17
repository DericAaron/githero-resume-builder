
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
        <span className="modalButton">
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
              <br/>
            </div>
          </div>
        </Modal>
        </span>
    );
  }
}

export default ResInfo;