import React, { Component } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`
class Counter extends Component {
render() {
  return (
    <Label>0ms</Label>
  )
}
}
export default Counter
