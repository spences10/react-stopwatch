import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Counter from './components/Counter'
import Start from './components/Start'
import Clear from './components/Clear'

const state = { lapse: 0, runnung: true }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Stopwatch</h1>
        </header>
        <p className="App-intro">
          Bootstrapped with `create-react-app`.
        </p>
        <div>
          <Counter lapse={20}  />
        </div>
        <div>
          <Start running={true}/>
          <Clear />
        </div>
      </div>
    )
  }
}

export default App
