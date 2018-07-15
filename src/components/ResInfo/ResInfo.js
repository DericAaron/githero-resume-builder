
import React, { Component } from 'react';
import './ResInfo.css';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

class ResInfo extends Component {

  render() {
    
    return (
        <div>
        <ExpansionPanel >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Personal Information</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    Bio: {this.props.profile.bio}
                    <Divider />
                    Email: {this.props.profile.email}
                    <Divider />
                    Github: {this.props.profile.github_name}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
    );
  }
}

export default ResInfo;











