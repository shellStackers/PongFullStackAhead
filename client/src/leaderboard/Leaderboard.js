import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import EventEmitter from 'fbemitter';
import EventSource from 'eventsource';

class Leaderboard extends Component {
  constructor(props){
    super(props);
    this.state = {leaderboard: [] };
  }

  componentDidMount(){
    fetch("http://pong-full-stack-ahead.herokuapp.com/users")
    .then(results => {
      return results.json();
    }).then(data => {
      let leaderboard = data.map((user) => {
        return(
          <div key={user.name}>{user.name} Total Wins: <strong>{user.totalWins} </strong>
           Total Losses: <strong>{user.totalLosses}</strong></div>
        )
      })
      this.setState({leaderboard: leaderboard});
      console.log("state", this.state.leaderboard);
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <Card>
          <CardHeader title="Leaderboard"/>
          <CardTitle title="Player Results"/>
          <CardText>
            <div>
              {this.state.leaderboard}
            </div>
          </CardText>
          <CardActions label="Action1">
          </CardActions>
        </Card>
      </MuiThemeProvider>
    );
  }

}

export default Leaderboard;


const style= {
  margin: 15
};
