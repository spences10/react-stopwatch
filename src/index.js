import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import { theme } from './theme/globalStyle'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById('root')
)
registerServiceWorker()
