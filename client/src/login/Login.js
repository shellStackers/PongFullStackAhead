import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }


  handleClick(event) {
    let apiBaseUrl = "http://pong-full-stack-ahead-pong-api.herokuapp.com/player";

    let self = this;
    let payload = {
      "name": this.state.name,
      "totalWins": 0,
      "totalLosses": 0
    }

    axios.post(apiBaseUrl, {
      name: payload.name,
      totalWins: payload.totalWins,
      totalLosses: payload.totalLosses
    }).then(function (response) {
      console.log(response);
      if(response.status == 200){
        console.log("Successfully created user")
        // let uploadScreen = [];
        // uploadScreen.push(<uploadScreen appContext = {self.props.appContext}/>)
        // self.props.appContext.setState({loginPage: [],
        //                                 uploadScreen: uploadScreen})
        if(response.data){
          window.location.href = "http://" + window.location.host + "/thejungle";
        }
      } else if (response.status == 204){
        // console.log("Incorrect credentials");
        // alert("Incorrect credentials. Please try again")
      } else {
        // console.log("Username does not exist");
        // alert("Username does not exist. Please re-enter or register");
      }
    }).catch(function (err) {
      console.log(err)
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
            <TextField hintText="Enter username" floatingLabelText="Username"
                      onChange={(event, newValue) => this.setState({name:newValue})}/>
            <br/>
            <RaisedButton label="Submit" primary={true} style={style}
                      onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }

}

export default Login;


const style= {
  margin: 15
};
