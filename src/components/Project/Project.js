import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      project_name: '',
      image_url: '',
      website_url: '',
      git_repo: '',
      raw_url: '',
      description: ''
    }
  }

  handleChange = (key) => (event) => {
    this.setState({...this.state, [key]: event.target.value})
  } // end change handler

  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
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
          <h1>Project Creator</h1>

          <div className="projectInput">
            <input type="text" placeholder="Project Name" value={this.state.project_name} onChange={this.handleChange('project_name')}/>
            <input type="text" placeholder="Image Url" value={this.state.image_url} onChange={this.handleChange('image_url')}/>
            <input type="text" placeholder="Website Url" value={this.state.website_url} onChange={this.handleChange('website_url')}/>
            <input type="text" placeholder="Git Repository" value={this.state.git_repo} onChange={this.handleChange('git_repo')}/>
            <input type="text" placeholder="Raw Code Url" value={this.state.raw_url} onChange={this.handleChange('raw_url')}/>
            <input type="text" placeholder="Description" value={this.state.description} onChange={this.handleChange('description')}/>
            <Button variant="contained">Add Project</Button>
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
export default connect(mapStateToProps)(InfoPage);
