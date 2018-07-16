import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditButton.css';

import ResHeader from '../../ResHeader/ResHeader';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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

  change = (key) => (event) => {
    const action = {type: 'UPDATE_PROFILE', payload: event.target.value, var: key};
    this.props.dispatch(action);
  }

  submitProfile = () => {    
    this.props.dispatch({type: 'SUBMIT_UPDATE', payload: this.props.profile});
  }

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
            <Paper>
                <ResHeader profile={this.props.profile}/>
                <br/>
                <br/>
                <input type="text" placeholder="Name" value={this.props.profile.resume_name} onChange={this.change('resume_name')} className="input"/>
                <br/>
                <input type="text" placeholder="Github Account" value={this.props.profile.github_name} onChange={this.change('github_name')} className="input"/>
                <br/>
                <input type="text" placeholder="Email Address" value={this.props.profile.email} onChange={this.change('email')} className="input"/>
                <br/>

                <textarea rows="4" cols="50" placeholder="Personal Bio" maxLength="280"
                value={this.props.profile.bio} onChange={this.change('bio')}></textarea>
                <div className="input">
                <Button variant="contained" color="primary" onClick={this.submitProfile}>Update</Button>
                </div>
            </Paper>
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