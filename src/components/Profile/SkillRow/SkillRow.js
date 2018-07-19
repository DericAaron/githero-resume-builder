import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';

const mapStateToProps = state => ({
    profile: state.profile.profileEdit,
  });

class ProjectTable extends Component {

    removeSkill = (id) => {
        if(window.confirm('Confirm Delete')){
          const action = {type: 'DELETE_SKILL', payload: {sid: id, pid: this.props.profile.id}};
          this.props.dispatch(action);
        } 
    }

  render() {

    return (      
    <TableRow >
        <TableCell>{this.props.skillItem.skill}</TableCell>
        <TableCell>
            <IconButton>
                <Close onClick={() => this.removeSkill(this.props.skillItem.id)}/>
            </IconButton>
        </TableCell>
    </TableRow>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectTable);