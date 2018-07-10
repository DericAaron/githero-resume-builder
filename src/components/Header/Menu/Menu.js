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
    
      toggleDrawer = (open) => () => {
        this.setState({
          right: open,
        });
      };
    
  render() {

    const menuItems = <List className="menulist">
                        <Link to="/user">
                        <ListItem button>
                            <ListItemText primary="Profile" />
                        </ListItem>
                        </Link>

                        <Divider />
                        
                        <Link to="/info">
                        <ListItem button>
                            <ListItemText primary="Create Project" />
                        </ListItem>
                        </Link>

                        <Divider />

                        <ListItem button>
                            <ListItemText primary="Portfolio" />
                        </ListItem>
                    </List>;

    return (
        <div >
        <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
            <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
            >
                {menuItems}
            </div>
        </Drawer>

        </div>

    );
  }
}

export default Menu;