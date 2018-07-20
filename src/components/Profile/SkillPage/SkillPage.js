import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SkillPage.css';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

//redux store to props
const mapStateToProps = state => ({
    skillDrop: state.skill.skillSelect,
    profile: state.profile.profileEdit,
  });

class SkillPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skillNew: '',
            skillExist: '0'
        };
    }

    change = (key) => (event) => {
        this.setState({
            ...this.state, 
            [key]: event.target.value
        });
    }

    submitSkill(key) {
        if(this.state[key] === '0' || this.state[key] === '' ){
            alert('Incorrect Input');
        } 
        else if(key === 'skillExist') {
            let action = {type: 'SUBMIT_SKILL', payload: {sid: this.state[key], pid: this.props.profile.id}}
            this.props.dispatch(action);
            
        }  
        else if(key === 'skillNew'){
            let action = {type: 'SUBMIT_NEW_SKILL', payload: {name: this.state.skillNew, pid: this.props.profile.id}}
            this.props.dispatch(action);
        }
    }

  render() {

    return (
   
            <Paper>
            <div className="skillArea">

            <h4>Add a Skill</h4>
                <label htmlFor="existing">Skills used by others</label>
                <select onChange={this.change('skillExist')} value={this.state.skillExist} className="skillIn" id="existing">
                    <option value="0"> -- Select -- </option>
                    {
                    this.props.skillDrop.map( skill => 
                        <option value={skill.id} key={skill.id}>{skill.skill}</option>
                        )
                    }
                </select>
                <Button variant="contained" color="primary" onClick={()=>this.submitSkill('skillExist')} className="skillIn">Submit</Button>
            <br/>
            <hr/>
                <label htmlFor="new">Create Skill</label>
                <input id="new" type="text" placeholder="Skill Name" value={this.state.skillNew} onChange={this.change('skillNew')} className="skillIn"/>
                <Button variant="contained" color="primary" onClick={()=>this.submitSkill('skillNew')} className="skillIn">Submit</Button>
            </div>
            </Paper>
    );
  }
}

export default connect(mapStateToProps)(SkillPage);