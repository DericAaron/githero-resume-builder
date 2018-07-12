import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import ProjectCard from '../ProjectCard/ProjectCard';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import ResHeader from '../ResHeader/ResHeader';

const mapStateToProps = state => ({
  user: state.user,
  profile: state.profile.profileEdit
});

class Portfolio extends Component {

  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
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
          <ResHeader />
              
              <Paper className="protoField">
                {/* <ProjectCard project={this.state}/> */}
              </Paper>
          
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
export default connect(mapStateToProps)(Portfolio);