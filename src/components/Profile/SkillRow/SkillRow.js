import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import swal from 'sweetalert';

const mapStateToProps = state => ({
    profile: state.profile.profileEdit,
  });

class ProjectTable extends Component {

    removeSkill = (skill) => {
        const skillName = skill.skill;
        const id = skill.id;
        // edit the swal
        swal({
            title: "Are you sure?",
            text: "Once deleted, this skill will no longer appear in your portfolio!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((remove) => {
            if (remove) {
                const action = {type: 'DELETE_SKILL', payload: {sid: id, pid: this.props.profile.id}};
                this.props.dispatch(action);
                swal(`${skillName} has been removed from your profile!`, {
                    icon: "success",
                });
            } else {
              swal(`${skillName} was not removed!`);
            }
          });

    }

  render() {

    return (      
    <TableRow >
        <TableCell>{this.props.skillItem.skill}</TableCell>
        <TableCell></TableCell>
        <TableCell>
            <IconButton>
                <Close onClick={() => this.removeSkill(this.props.skillItem)}/>
            </IconButton>
        </TableCell>
    </TableRow>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectTable);