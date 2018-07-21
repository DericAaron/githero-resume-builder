import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SkillButton.css';

import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/AddCircle';
import SkillPage from '../SkillPage/SkillPage';

//redux store to props
const mapStateToProps = state => ({
  profile: state.profile.profileEdit,
});



class SkillWindow extends Component {

state = {
    open: false,
};

componentDidMount(){
  this.props.dispatch({type: 'GET_ALL_SKILLS'});
}// run the skill get call
    
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
            <Add />
        </IconButton>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className="EditSheet">
            <SkillPage handleClose={this.handleClose}/>
          </div>
        </Modal>
        </div>
    );
  }
}

export default connect(mapStateToProps)(SkillWindow);