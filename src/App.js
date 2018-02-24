import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

import Stopwatch from './components/Stopwatch'

const AppWrapper = styled.div`
  text-align: center;
`

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <AppLogo src={logo} alt="logo" />
          <h1 className="App-title">React Stopwatch</h1>
        </header>
        <p className="App-intro">
          Bootstrapped with `create-react-app`.
        </p>
        <p className="App-moar">
          Components styled with styled-components{' '}
          <span role="img" aria-labelledby="nail polish">
            💅
          </span>
        </p>
        <div>
          <Stopwatch />
        </div>
      </AppWrapper>
    )
  }
}

export default App
