import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';


import { USER_ACTIONS } from '../../redux/actions/userActions';
import ProjectTable from  './ProjectTable/ProjectTable';
import ResHeader from '../ResHeader/ResHeader';
import EditButton from './EditButton/EditButton';

import Paper from '@material-ui/core/Paper';

//redux store to props
const mapStateToProps = state => ({
  user: state.user,
  profile: state.profile.profileEdit,
});

//User class
class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({type: 'GET_PROFILE'});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
            
          <div className="profileGrid">
            <Paper>
            <ResHeader profile={this.props.profile}/>
            <br/>
            <br/>
              Resume Name: {this.props.profile.resume_name}
              <br/>
              GitHub Name: {this.props.profile.github_name}
              <br/>
              Email Address: {this.props.profile.email}
              <br/>
              LinkedIn: {this.props.profile.linkedin}
              <br/>
              Twitter: {this.props.profile.twitter}
              <br/>
              Personal Website: {this.props.profile.website}
            
              <br/>
              <br/>
            Personal Bio: {this.props.profile.bio}
            <EditButton />
          </Paper>
          <ProjectTable />
          </div>
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

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

