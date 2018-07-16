import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditButton.css';

import EditPage from '../EditPage/EditPage';

import Modal from '@material-ui/core/Modal';
import Edit from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

//redux store to props
const mapStateToProps = state => ({
  user: state.user,
  profile: state.profile.profileEdit,
});

class EditButton extends Component {

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
    let content = null;

    if (this.props.user.userName) {
      content = (

        <div>
        <IconButton onClick={this.handleOpen}>
            <Edit />
        </IconButton>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className="EditSheet">
            <EditPage />
          </div>
        </Modal>
        </div>
      );
    }

    return (
      <div>
        { content }
      </div>
    );
  }
}

export default connect(mapStateToProps)(EditButton);