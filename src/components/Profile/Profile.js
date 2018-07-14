import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';


import { USER_ACTIONS } from '../../redux/actions/userActions';
import ProjectTable from  './ProjectTable/ProjectTable';
import ResHeader from '../ResHeader/ResHeader';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

//redux store to props
const mapStateToProps = state => ({
  user: state.user,
  profile: state.profile.profileEdit,
  pic: state.profile.profilePicture
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

  change = (key) => (event) => {
    const action = {type: 'UPDATE_PROFILE', payload: event.target.value, var: key};
    this.props.dispatch(action);
  }

  submitProfile = () => {
    console.log('click');
    
    this.props.dispatch({type: 'SUBMIT_UPDATE', payload: this.props.profile});
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
              <input type="text" placeholder="Name" value={this.props.profile.resume_name} onChange={this.change('resume_name')}/>
              <input type="text" placeholder="Github Account" value={this.props.profile.github_name} onChange={this.change('github_name')}/>
              <input type="text" placeholder="Email Address" value={this.props.profile.email} onChange={this.change('email')}/>
            <br/>

            <textarea rows="4" cols="50" placeholder="Personal Bio" maxLength="280" className="textInput"
            value={this.props.profile.bio} onChange={this.change('bio')}></textarea>

            <br/>
            <Button variant="contained" color="primary" onClick={this.submitProfile}>Update</Button>
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

