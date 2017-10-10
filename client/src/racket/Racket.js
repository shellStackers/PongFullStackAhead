import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

import './RacketItem.css';

class Racket extends Component {
  constructor(props){
    super(props);
    this.state = {users: [] }
  }

  render() {
    // if(!this.state.users) return <p>Loading...</p>
    return (
        <div className="RacketItem">
          <div className="RacketItem_content"></div>
        </div>
    );
  }
}

export default Racket;
