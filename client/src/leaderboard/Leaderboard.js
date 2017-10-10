import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Leaderboard extends Component {
  constructor(props){
    super(props);
    this.state = {data: [] }
  }

  componentDidMount(){
    var es = new EventSource('http://localhost:3000/leaderboard');
    var esList = document.querySelector("ul");

    es.onmessage = function(e){

      //  let data = e.map((scores) => {
      //    return(
      //      <div key={e.data}>{e.data}</div>
      //    )
      // })
      // this.setState({data: e.data});##########
      // console.log("state", this.state.e.data);##########
      // var newElement = document.createElement("li");
      //
      // newElement.textContent = e.data;
      // esList.appendChild(newElement);
    }
    //let userData = '';
    //fetch("http://pong-full-stack-ahead.herokuapp.com/leaderboard")
    // .then(results => {
    //   userData = function(results){
    //     return results.body.getReader()
    //     results.body.getReader();
    //   }
    // }).catch(function (e) {
    //   console.log(e)
    // }).then(function(data) {
    //   console.log(data);
    //   pump(data);
    //   // let leaderboard = data.map((scores) => {
    //   //   return(
    //   //     <div key={scores.id}>{scores.name}</div>
    //   //   )
    //   // })
    //   // this.setState({leaderboard: leaderboard});
    //   // console.log("state", this.state.leaderboard);
    // }).then(err => {
    //   console.log(err);
    // })
    //
    //       function pump(reader){
    //
    //       }
  }

  render() {
    return (
      <MuiThemeProvider>
        <Card>
          <CardHeader title="Leaderboard"/>
          <CardTitle title="Player Results"/>
          <CardText>
            <div>
              {this.state.data}
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
