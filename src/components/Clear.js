import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 2em;
  border-radius: 3px;
  padding: 1em;
  margin: 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`

class Clear extends Component {
  render() {
    return <Button>Clear</Button>
  }
}

export default Clear
