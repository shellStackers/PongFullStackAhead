import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Login from './login/Login';
//import Register from './login/Register';
import Game from './game/Game';

class Home extends Component {
  render(){
    return (<h1>Hello home</h1>);
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        {/* <div> */}
          {/* <h2>Welcome to the jungle</h2>
          <ul>
            <li><Link to={'/'}>Login</Link></li>
            <li><Link to={'/thejungle'}>The Jungle</Link></li>
          </ul> */}
          {/* <hr /> */}
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/thejungle' component={Game}/>
          </Switch>
        {/* </div> */}
      </Router>
    );
  }
}

export default App;
