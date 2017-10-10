import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      totalWins: '',
      totalLosses: ''
    }
  }


  handleClick(event) {
    let apiBaseUrl = "http://pong-full-stack-ahead-pong-api.herokuapp.com/player/record/";
    //window.location.href = "http://" + window.location.host + "/thejungle";
    let self = this;
    let payload = {
      "result": this.state.result,
      "value": this.state.points
    }

    let userId = {
      "userId": this.state.userId
    }

    axios.post(apiBaseUrl + userId.userId, {
      result: payload.result,
      value: payload.value
    }).then(function (response) {
      console.log(response);
      if(response.data.code == 200){
        console.log("Successfully request")
        // let uploadScreen = [];
        // uploadScreen.push(<uploadScreen appContext = {self.props.appContext}/>)
        // self.props.appContext.setState({loginPage: [],
        //                                 uploadScreen: uploadScreen})
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
            <TextField hintText="Enter user ID" floatingLabelText="User ID"
                      onChange={(event, newValue) => this.setState({userId:newValue})}/>
            <br/>
            <TextField type="text" hintText="Result" floatingLabelText="Result"
                      onChange={(event, newValue) => this.setState({result:newValue})}/>
            <br/>
            <TextField type="text" hintText="Total Points" floatingLabelText="Total Points"
                      onChange={(event, newValue) => this.setState({points:newValue})}/>
            <br/>
            <RaisedButton label="Submit Score" primary={true} style={style}
                      onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }

}

export default Form;


const style= {
  margin: 15
};
