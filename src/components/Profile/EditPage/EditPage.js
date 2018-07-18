import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResHeader from '../../ResHeader/ResHeader';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

//redux store to props
const mapStateToProps = state => ({
  user: state.user,
  profile: state.profile.profileEdit,
});

class EditPage extends Component {

    constructor(props){
        super(props);

        this.state = {}
        }

    componentDidMount(){
        this.setState({...this.props.profile});
    }

  change = (key) => (event) => {
    this.setState({...this.state, [key]: event.target.value});
  }

  submitProfile = () => {    
    this.props.dispatch({type: 'SUBMIT_UPDATE', payload: this.state});
    this.props.close();
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (

            <Paper>
                <ResHeader profile={this.state}/>
                <br/>
                <br/>
                <label for="resumeN">Resume Name:</label>
                <input type="text" placeholder="Name" id="resumeN" value={this.state.resume_name} 
                onChange={this.change('resume_name')} className="input" maxLength="20"/>
                <br/>
                <input type="text" placeholder="Github Account" value={this.state.github_name} onChange={this.change('github_name')} className="input"/>
                <br/>
                <input type="text" placeholder="Email Address" value={this.state.email} onChange={this.change('email')} className="input"/>
                <br/>
                <input type="text" placeholder="LinkedIn" value={this.state.linkedin} onChange={this.change('linkedin')} className="input"/>
                <br/>
                <input type="text" placeholder="Twitter" value={this.state.twitter} onChange={this.change('twitter')} className="input"/>
                <br/>
                <input type="text" placeholder="Personal Website" value={this.state.website} onChange={this.change('website')} className="input"/>
                <br/>

                <textarea rows="4" cols="50" placeholder="Personal Bio" maxLength="280"
                value={this.state.bio} onChange={this.change('bio')}></textarea>
                <div className="input">
                    <Button variant="contained" color="primary" onClick={this.submitProfile}>Update</Button>
                </div>
            </Paper>
      );
    }

    return (
      <div>
        { content }
      </div>
    );
  }
}

export default connect(mapStateToProps)(EditPage);