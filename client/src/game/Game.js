import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SplitPane from 'react-split-pane';

import Panel from '../panel/Panel';
import Racket from '../racket/Racket';
import Form from '../form/Form';
import Leaderboard from '../leaderboard/Leaderboard';

import './Game.css';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {users: [] }
  }

  componentDidMount(){
    fetch("http://pong-full-stack-ahead.herokuapp.com/users")
    .then(results => {
      return results.json();
    }).then(data => {
      let users = data.map((user) => {
        return(
          <div key={user.id}>{user.name}</div>
        )
      })
      this.setState({users: users});
      console.log("state", this.state.users);
    })
  }

  render() {
    // if(!this.state.users) return <p>Loading...</p>
    return (
        <div className="Game">
          {/* <div>
            {this.state.users}
          </div> */}
          <Panel/>
          <div className="GameStyleLeftColumn"></div>
          <br/><br/>
          <SplitPane split="vertical" defaultSize={600}>
            <div>
              <Racket/>
            </div>
            <div>
              <SplitPane className="GameStyleFloatRight"
                split="horizontal" defaultSize={400}>
                <div>
                  <Form/>
                </div>
                <div>
                  <Leaderboard/>
                </div>
              </SplitPane>
            </div>
          </SplitPane>
        </div>
    );
  }
}

export default Game;
