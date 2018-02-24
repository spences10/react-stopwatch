import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'

import Stopwatch from './components/Stopwatch'

import { HEROS } from './theme/themeConstants'

const AppWrapper = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
  background-color: ${props => props.theme.purple};
  height: 12rem;
  padding: 1rem;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.purple};
  background-image: url("${HEROS.TOPOGRAPHY}");
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
  color: ${props => props.theme.dark};
  font-size: large;
`

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
          <span role="img" aria-label="nail polish">
            💅
          </span>
        </AppIntro>
        <ComponentWrapper>
          <Stopwatch />
        </ComponentWrapper>
      </AppWrapper>
    )
  }
}

export default App
