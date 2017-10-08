import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route} from 'react-router';

class Home extends Component {
  render(){
    return (<h1>Hello home</h1>);
  }
}

ReactDOM.render(
            <App/>,
             document.getElementById('root')
          );
registerServiceWorker();
