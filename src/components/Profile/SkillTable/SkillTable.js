import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/AddCircle';
import Close from '@material-ui/icons/Close';

//redux store to props
const mapStateToProps = state => ({
  skill: state.skill.skill,

  skillDrop: state.skill.skillSelect,
  profile: state.profile.profileEdit,
});

//User class
class ProjectTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skillNew: '',
            skillExist: '0'
        };
    }
    // Get skills from DB

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

    removeSkill = (id) => {
        if(window.confirm('Confirm Delete')){
          const action = {type: 'DELETE_SKILL', payload: {sid: id, pid: this.props.profile.id}};
          this.props.dispatch(action);
        } 
    }

    componentDidMount(){
        this.props.dispatch({type: 'GET_SKILLS', payload: this.props.profile.id});
        this.props.dispatch({type: 'GET_ALL_SKILLS'});
    }// run the skill get call

  render() {

    return (
      <div>
        <Paper >
            <Table >
                <TableHead>
                <TableRow>
                    <TableCell>Skill</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {
                    this.props.skill.map( skillItem =>    
                    <TableRow key={skillItem.id}>
                        <TableCell>{skillItem.skill}</TableCell>
                        <TableCell>
                            <IconButton>
                                <Close onClick={() => this.removeSkill(skillItem.id)}/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    )
                }

                <TableRow>
                
                <TableCell>
                    <IconButton>
                        <Add/>
                    </IconButton>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>

                </TableBody>
            </Table>

            <select onChange={this.change('skillExist')} value={this.state.skillExist}>
                <option value="0"> -- Select -- </option>
                {
                   this.props.skillDrop.map( skill => 
                    <option value={skill.id} key={skill.id}>{skill.skill}</option>
                    )
                }
            </select>

            <button onClick={()=>this.submitSkill('skillExist')}> button E</button>
            <br/>
            <input type="text" placeholder="Skill Name" value={this.state.skillNew} onChange={this.change('skillNew')} />
            <button onClick={()=>this.submitSkill('skillNew')}> button N</button>
        </Paper>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectTable);