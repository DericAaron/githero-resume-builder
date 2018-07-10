import React, { Component } from 'react';
import './Menu.css';

//material ui
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

class Menu extends Component {

    state = {
        right: false
      };
    
      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
    
  render() {

    const sideList = <List className="menulist">
                        <ListItem button>
                            <Link to="/info"><ListItemText primary="Profile" /></Link>
                        </ListItem>

                        <Divider />

                        <ListItem button>
                            <Link to="/user"><ListItemText primary="Create Project" /></Link>
                        </ListItem>

                        <Divider />

                        <ListItem button>
                            <ListItemText primary="Portfolio" />
                        </ListItem>
                    </List>;

    return (
        <div >
        <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer('right', true)}>
            <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
            >
                {sideList}
            </div>
        </Drawer>

        </div>

    );
  }
}

export default Menu;