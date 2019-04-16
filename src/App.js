import React, { Component } from 'react'
import logo from './logo.svg'
import styled, { keyframes } from 'styled-components'
import Helmet from 'react-helmet'

import { Stopwatch } from './components/Stopwatch'

import { HEROS } from './theme/themeConstants'
import { GlobalStyle } from './theme/globalStyle'

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

const rotate360 = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
`

const AppTitle = styled.h1``

const AppLogo = styled.img`
  animation: ${rotate360} infinite 5s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1s linear;
  }
`

const AppIntro = styled.p`
  color: ${props => props.theme.dark};
  font-size: large;
`

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``

const CodeWrapper = styled.code`
  font-size: 1.5rem;
`

const ComponentWrapper = styled.div``

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <Helmet
          title={'React Stopwatch'}
          titleTemplate={'titleTemplate'}>
          <meta name="description" content={'a stopwatch in React'} />
          {/* <meta name="image" content={seo.image} /> */}
          <html lang={'en-GB'} />
        </Helmet>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>React Stopwatch</AppTitle>
        </AppHeader>
        <AppIntro>
          Bootstrapped with{' '}
          <CodeWrapper>create-react-app</CodeWrapper>.
        </AppIntro>
        <AppIntro>
          Components styled with{' '}
          <CodeWrapper>styled-components</CodeWrapper>{' '}
          <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
        </AppIntro>
        <ComponentWrapper>
          <Stopwatch />
        </ComponentWrapper>
      </AppWrapper>
    )
  }
}

export default App
