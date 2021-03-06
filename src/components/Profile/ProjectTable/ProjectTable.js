import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ProjectRow from '../ProjectRow/ProjectRow';

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
  user: state.user,
  projects: state.project.project
});

//User class
class ProjectTable extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'GET_PROJECTS'});
  }

  render() {

    return (
      <div>
        <Paper >
            <Table >
                <TableHead>
                <TableRow>
                    <TableCell>Project</TableCell>
                    <TableCell>Show / Hide</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {
                    this.props.projects.map( projectItem =>    
                    <ProjectRow key={projectItem.id} projectItem={projectItem}/>
                    )
                }

                <TableRow>
                <TableCell component="th" scope="row"></TableCell>
                <TableCell>
                <Link to="/project-creator">
                  <IconButton>
                    <Add/>
                  </IconButton>
                  </Link>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>

                </TableBody>
            </Table>
        </Paper>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectTable);