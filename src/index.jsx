
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import {theme} from './theme/globalStyle'


render(
  <ThemeProvider theme={theme}>
    <App />
   </ThemeProvider>,
   document.getElementById('app'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}