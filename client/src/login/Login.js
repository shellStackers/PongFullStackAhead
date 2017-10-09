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
    let apiBaseUrl = "http://localhost:3000/api";
    window.location.href = "http://" + window.location.host + "/thejungle";
    let self = this;
    let payload = {
      "email": this.state.username,
      "password": this.state.password
    }

    axios.post(apiBaseUrl + 'login', payload).then(function (response) {
      console.log(response);
      if(response.data.code == 200){
        console.log("Successfully logged in")
        let uploadScreen = [];
        uploadScreen.push(<uploadScreen appContext = {self.props.appContext}/>)
        self.props.appContext.setState({loginPage: [],
                                        uploadScreen: uploadScreen})
      } else if (response.data.code == 204){
        console.log("Incorrect credentials");
        alert("Incorrect credentials. Please try again")
      } else {
        console.log("Username does not exist");
        alert("Username does not exist. Please re-enter or register");
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
                      onChange={(event, newValue) => this.setState({username:newValue})}/>
            <br/>
            <TextField type="password" hintText="Enter password" floatingLabelText="Password"
                      onChange={(event, newValue) => this.setState({password:newValue})}/>
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
