import React, { Component } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  font-size: 4em;
  border-radius: 3px;
  padding: 2em;
  margin: 2em;
  background: transparent;
  color: palevioletred;
  // border: 2px solid palevioletred;
`
class Counter extends Component {
  render() {
    return <Label>0ms</Label>
  }
}
export default Counter
