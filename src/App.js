import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Counter from './components/Counter'
import Start from './components/Start'
import Clear from './components/Clear'

const state = { lapse: 0, running: true }

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
        <p className="App-moar">
          Components styled with styled components.
        </p>
        <div>
          <Counter lapse={state.lapse}  />
        </div>
        <div>
          <Start running={state.running}/>
          <Clear />
        </div>
      </div>
    )
  }
}

export default App
