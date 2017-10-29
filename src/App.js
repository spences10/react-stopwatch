import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Stopwatch from './components/Stopwatch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Stopwatch</h1>
        </header>
        <p className="App-intro">Bootstrapped with `create-react-app`.</p>
        <p className="App-moar">Components styled with styled-components <span role="img" aria-labelledby="nail polish">💅</span></p>
        <div>
          <Stopwatch />
        </div>
      </div>
    )
  }
}

export default App
