import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'

import Stopwatch from './components/Stopwatch'

const AppWrapper = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const AppTitle = styled.h1``

const AppLogo = styled.img`
  animation: App-logo-spin infinite 120s linear;
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

const AppIntro = styled.p`
  font-size: large;
`

const SCSpan = styled.span``

const ComponentWrapper = styled.div``

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>React Stopwatch</AppTitle>
        </AppHeader>
        <AppIntro>Bootstrapped with `create-react-app`.</AppIntro>
        <AppIntro>
          Components styled with styled-components{' '}
          <SCSpan role="img" aria-labelledby="nail polish">
            💅
          </SCSpan>
        </AppIntro>
        <ComponentWrapper>
          <Stopwatch />
        </ComponentWrapper>
      </AppWrapper>
    )
  }
}

export default App
