import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Profile from './components/Profile/Profile';
import Project from './components/Project/Project';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

import './styles/main.css';

const App = () => (
  <div>
   
    <Router>
      <div className="main">
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

        <Route
          path="/portfolio"
          component={Portfolio}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
      <Footer />
      </div>
      
    </Router>
  </div>
);

export default App;
