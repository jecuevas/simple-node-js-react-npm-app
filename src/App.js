import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {value: 'hola'}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, integrate jenkins together to github. cntinuamos aprendiendo</h1>
          <h2>esto esta quedando excelente, funciono el WebHook, ahora con credenciales. {this.state.value}</h2>   
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
