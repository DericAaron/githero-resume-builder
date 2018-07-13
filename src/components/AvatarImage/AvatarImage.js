import React, { Component } from 'react';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {compose} from 'redux';

const styles = {
    bigAvatar: {
      width: 100,
      height: 100,
    }
  };

//redux store to props
const mapStateToProps = state => ({
  profile: state.profile.profileEdit,
  pic: state.profile.profilePicture
});

//User class
class AvatarImage extends Component {

  render() {

    const {classes} = this.props;

    return (
      <div>
        <Avatar
            alt={this.props.profile.resume_name}
            src={this.props.pic} 
            className={classes.bigAvatar}
        />
      </div>
    );
  
    }
}

export default   compose(connect(mapStateToProps), withStyles(styles))(AvatarImage);