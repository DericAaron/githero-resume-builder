import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Project.css';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ProjectCard from '../ProjectCard/ProjectCard';
import swal from 'sweetalert';

const mapStateToProps = state => ({
  user: state.user,
  profile: state.profile.profileEdit.id
});

class ProjectIn {
  constructor(){
    this.project_name = '';
    this.image_url = '';
    this.website_url = '';
    this.git_repo = '';
    this.rawcode = '';
    this.description = '';
  }
}

class InfoPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      project_name: '',
      image_url: '',
      website_url: '',
      git_repo: '',
      rawcode: '',
      description: ''
    }
  }

  clearInput() {
    this.setState(new ProjectIn());
  }

  handleChange = (key) => (event) => {
    this.setState({...this.state, [key]: event.target.value})
  } // end change handler

  componentDidMount() {
    // this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    this.props.dispatch({type: 'GET_PROFILE'});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  submitProject = () => {

    if(!(this.state.project_name === '') && !(this.state.description === '') ){
      const action = {type: 'SUBMIT_PROJECT', payload: {profile_id: this.props.profile, ...this.state}};
      this.props.dispatch(action);
      swal(`${this.state.project_name}`, `Has been created!` , "success")
      this.clearInput();
    }
    else {
      swal(``, `Project must have a name and description!` , "warning");
    }
  }

  // Used to input data for demonstration
  demoInput = () => {
    this.setState(
      {
        project_name: 'Ta Do - List Application',
        image_url: 'http://i1383.photobucket.com/albums/ah287/Dahrun/Screen%20Shot%202018-07-22%20at%201.16.03%20PM_zpsteoziyn2.png',
        website_url: '',
        git_repo: 'https://github.com/DericAaron/weekend-3-mean-todo-list',
        rawcode: `Technologies used:
        Mongo
        Express
        Angular
        NodeJS
    
    *** Now that is one "MEAN" Stack! ***`,
        description: 'Ta Do is a list application that the user can submit tasks to and sort them by completion. Completed tasks will be green and appear at the bottom of the page.'
      }
    );
  } //end demo

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1>Project Creator</h1>
          <div className="formGrid">
            <Paper className="protoField">
              <div className="center">
                <TextField type="text" label="Project Name" value={this.state.project_name} onChange={this.handleChange('project_name')}/>
                <br/>
                <TextField type="text" label="Image Url" value={this.state.image_url} onChange={this.handleChange('image_url')}/>
                <br/>
                <TextField type="text" label="Website Url" value={this.state.website_url} onChange={this.handleChange('website_url')}/>
                <br/>
                <TextField type="text" label="Git Repository" value={this.state.git_repo} onChange={this.handleChange('git_repo')}/>
                <br/>
                <br/>
                <textarea type="text" maxLength="840" placeholder="Additional (Formated)" value={this.state.rawcode} onChange={this.handleChange('rawcode')}/>
                <br/>
                <textarea type="text" maxLength="280" placeholder="Description" value={this.state.description} onChange={this.handleChange('description')}/>
                <br/>
                <br/>
                <Button variant="contained" onClick={this.submitProject}>Add Project</Button>
                
                <Button variant="contained" onClick={this.demoInput}>Demo</Button>
              </div>
            </Paper>
            <div className="cardArea">
              
              <Paper className="protoField">
                <ProjectCard project={this.state}/>
              </Paper>
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
export default connect(mapStateToProps)(InfoPage);
