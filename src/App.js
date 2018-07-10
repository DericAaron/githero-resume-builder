import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Profile from './components/Profile/Profile';
import Project from './components/Project/Project';

import './styles/main.css';

const App = () => (
  <div>
   
    <Router>
      <div>
      <Header title="Project Base" />
      <Switch>
      
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/profile"
          component={Profile}
        />
        <Route
          path="/project-creator"
          component={Project}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
      </div>
    </Router>
  </div>
);

export default App;
