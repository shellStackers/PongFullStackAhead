import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Panel extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }


  handleClick(event) {
    let apiBaseUrl = "http://localhost:3000/api";
    //window.location.href = "http://" + window.location.host + "/thejungle";
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
            <AppBar title="Pong" />
            <FloatingActionButton label="Submit" primary={true}
                      onClick={(event) => this.handleClick(event)}
                      style={style}>
            {/* <FontIcon className="muidocs-icon-action-home"/> */}
            <ContentAdd/>
            </FloatingActionButton>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }

}

export default Panel;


const style= {
  margin: 15,
  position: 'fixed',
  Width: 100,
  bottom: 0,
  right: 3
};
