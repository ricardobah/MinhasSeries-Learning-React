import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Ola,Flw} from './Ola'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
          
          <Ola name='Cabeça'/>
          <Flw/>
           
        </header>
      </div>
    );
  }
}

export default App;
