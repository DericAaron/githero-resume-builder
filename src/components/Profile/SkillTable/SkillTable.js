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

//redux store to props
const mapStateToProps = state => ({
  skill: state.skill.skill,

  skillDrop: state.skill.skillSelect,
  profile: state.profile.profileEdit,
});

//User class
class ProjectTable extends Component {

    // Get skills from DB

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
                    <TableCell>Show / Hide</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {
                    this.props.skill.map( skillItem =>    
                    <TableRow>
                        <TableCell>{skillItem.skill}</TableCell>
                        <TableCell>Show</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                    )
                }

                <TableRow>
                <TableCell component="th" scope="row">
                
                </TableCell>
                <TableCell>
                    <IconButton>
                        <Add/>
                    </IconButton>
                </TableCell>
                <TableCell>

                </TableCell>
              </TableRow>

                </TableBody>
            </Table>

            <select name="" id="">
                {
                   this.props.skillDrop.map( skill => 
                    <option value={skill.id} key={skill.id}>{skill.skill}</option>
                    )
                }
            </select>
        </Paper>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectTable);