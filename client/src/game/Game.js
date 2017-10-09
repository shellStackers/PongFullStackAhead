import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {users: [] }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(results => {
      return results.json();
    }).then(data => {
      let users = data.map((user) => {
        return(
          <div key={user.id}>{user.username}</div>
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
          {this.state.users}
        </div>
    );
  }
}

export default Game;
