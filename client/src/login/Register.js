import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

import Login from '../login/Login';

class Register extends Component {
  constructor(props) {
    super();
    this.state = {
      first_name: '',
      email: '',
      password: ''
    }
  }

  handleClick(event) {
    let apiBaseUrl = "http://localhost:3000/api";
    console.log("values", this.state.first_name, this.state.email, this.state.password);
    let self = this;
    let payload = {
      "first_name": this.state.first_name,
      "email": this.state.email,
      "password": this.state.password
    }

    axios.post(apiBaseUrl + '/register', payload).then(function (response) {
      console.log(response);
      if(response.data.code == 200){
        let loginscreen = [];
        loginscreen.push(<Login parentContext={this}/>);
        let loginmessage = "You are not registered please register before proceeding";
        self.props.parentContext.setState({loginscreen: loginscreen,
                                          loginmessage: loginmessage,
                                          buttonLabel: "Register",
                                          isLogin: true});
      }
    }).catch(function (err) {
      console.log(err);
    }
  },

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Register"/>
            <TextField hintText="Enter your first name" floatingLabelText="first name"
                      onChange = {(event, newValue) => this.setState({first_name:newValue})}/>
            <TextField hintText="Enter your email" floatingLabelText="email"
                      onChange = {(event, newValue) => this.setState({email:newValue})}/>
            <TextField hintText="Enter your password" floatingLabelText="password"
                      onChange = {(event, newValue) => this.setState({password:newValue})}/>
            <br/>
            <RaisedButton label="Register" primary={true} style={style}
                      onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

const style = {
  margin: 15
};

export default Register;
