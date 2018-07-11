import React, { Component } from 'react';
import './ProjectCard.css';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Web from '@material-ui/icons/WebAsset';
import Developer from '@material-ui/icons/DeveloperMode';

class ProjectCard extends Component {
    constructor(props){
        super(props);
    
        this.state = {view: 1}
      }

  changeView = (newCase) => {
    this.setState({view: newCase});
  }

  render() {
    let content = null;

    switch (this.state.view) {
        case 1: 
      content = (
          <div>
        <img src={this.props.project.image_url} alt=""/>
                  <CardContent>
                       
                    <Typography component="p">
                      {
                        this.props.project.description
                      }
                    </Typography>
                  </CardContent>
                  </div>
      )
      break;

      case 2: 
      content = (
                
          <CardContent>
            <Typography component="p">
              {
                this.props.project.raw_url
              }
            </Typography>
          </CardContent>

    )
    break;
    }
    

    return (
      <div>
          <Card className="card">
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe">
                        {this.props.project.project_name[0]}
                      </Avatar>
                    }
                    action={
                    <span>
                      <IconButton onClick={() => this.changeView(1)}>
                        <Web/>
                      </IconButton>
                    <IconButton onClick={() => this.changeView(2)}>
                      <Developer />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    </span>
                    }
                    title={this.props.project.project_name}
                    className="cardHeader"
                  />
                  
                  { content }
                </Card>
        
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default ProjectCard;