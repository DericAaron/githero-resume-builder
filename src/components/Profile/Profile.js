import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';


import { USER_ACTIONS } from '../../redux/actions/userActions';
import ProjectTable from  './ProjectTable/ProjectTable';
import ResHeader from '../ResHeader/ResHeader';
import UserTable from './UserTable/UserTable';
import SkillTable from './SkillTable/SkillTable';

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
            <div className="scaler">
            <ResHeader profile={this.props.profile}/>
            </div>
            <br/>
            <hr/>
            
            <div className="inner">
              <UserTable />
            </div>
            <br/>
          </Paper>

          <div className="altGrid">
          <ProjectTable />
          <SkillTable />
          {/* Skill Table to be componantized */}
          
          </div>
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

