import React, { Component } from 'react';

import './Header.css';
import Menu from './Menu/Menu';

//material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});


class Header extends Component {

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  loginButton = () => {
    this.props.history.push('home');
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  render() {

    let button = null;

    if (this.props.user.userName) {
      button = (
        <Button color="inherit" onClick={this.logout}>Logout</Button>
      );
    }

    else {
      button = (
        <Button color="inherit" onClick={this.loginButton}>Login</Button>
      );
    }

    return (
        <div >
          <AppBar position="static">
            <Toolbar className="header">
              <div className="title">
                <Typography variant="title" color="inherit" >
                GitHero
                </Typography>
              </div>
              <div className="title-action">
                {button}
                <Menu />
              </div>
            </Toolbar>
          </AppBar>
        </div>

    );
  }
}

export default connect(mapStateToProps)(Header);
