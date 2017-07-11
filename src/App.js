import React, { Component } from 'react';
import './App.css';
import ClamList from './ClamList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>InstaClam</h2>
        </div>
        <h2>InstaClam </h2>
        <ClamList />
      </div>
    );
  }
}

export default App;
