import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SlidingPuzzle from './components/SlidingPuzzle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlidingPuzzle />
      </div>
    );
  }
}

export default App;
