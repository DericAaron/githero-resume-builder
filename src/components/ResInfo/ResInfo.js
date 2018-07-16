
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
            <p>{this.props.profile.email}</p>
             <Divider />
            <h5>GitHub Account</h5>
            <p>{this.props.profile.github_name}</p>
          </div>
        </Modal>
        </div>
    );
  }
}

export default ResInfo;

{/* <ExpansionPanel >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Personal Information</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    Bio: 
                    <Divider />
                    Email: {this.props.profile.email}
                    <Divider />
                    Github: {this.props.profile.github_name}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel> */}











