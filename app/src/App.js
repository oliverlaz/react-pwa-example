import React, { Component } from 'react';
import OfflineContent from './OfflineContent';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="Normal-align">
          <p>Content received from some external REST endpoint, also offline available</p>
          <OfflineContent fromUrl="http://localhost:9000/data/1" />
        </div>
      </div>
    );
  }
}
