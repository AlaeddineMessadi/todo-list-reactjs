import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


/* Components */


import Header from './Components/Header/Timer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
