import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditButton from '../EditButton/EditButton';

import Paper from '@material-ui/core/Paper';

//redux store to props
const mapStateToProps = state => ({
  profile: state.profile.profileEdit,
});

//User class
class UserPage extends Component {

  render() {

    return (
      
      <Paper>
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th><EditButton /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Resume Name:</td>
            <td>{this.props.profile.resume_name}</td>
          </tr>
          <tr>
            <td>GitHub Name:</td>
            <td>{this.props.profile.github_name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{this.props.profile.email}</td>
          </tr>
          <tr>
            <td>LinkedIn:</td>
            <td>{this.props.profile.linkedin}</td>
          </tr>
          <tr>
            <td>Twitter:</td>
            <td>{this.props.profile.twitter}</td>
          </tr>
          <tr>
            <td>Personal Website:</td>
            <td>{this.props.profile.website}</td>
          </tr>
          <tr>
            <td>Bio:</td>
            <td>{this.props.profile.bio}</td>
          </tr>
        </tbody>
      </table>
      </Paper>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);