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

class Start extends Component {
  render() {
    return <Button>{this.props.running ? 'Stop' : 'Start'}</Button>
  }
}

export default Start
