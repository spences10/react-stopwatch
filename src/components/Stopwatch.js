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

const Label = styled.label`
  font-size: 4em;
  border-radius: 3px;
  // padding: 1em;
  margin: 2em;
  background: transparent;
  color: palevioletred;
  // border: 2px solid palevioletred;
`

class Stopwatch extends React.Component {
  state = { lapse: 0, running: false }

  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - state.lapse
        this.timer = setInterval(() => {
          this.setState(
            {
              lapse: Date.now() - startTime
            },
            () => {
              console.log(this.state.lapse)
            }
          )
        })
      }
      return { running: !state.running }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  handleClearClick = () => {
    clearInterval(this.timer)
    this.setState({ running: false, lapse: 0 })
  }

  render() {
    const { lapse, running } = this.state
    const buttonStyles = {
      border: '1px solid #ccc',
      background: '#fff',
      fontSize: '2em',
      padding: 15,
      margin: 5,
      width: 200
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <Label>{lapse}ms</Label>
        <Button onClick={this.handleRunClick}>
          {running ? 'Stop' : 'Start'}
        </Button>
        <Button onClick={this.handleClearClick}>
          Clear
        </Button>
      </div>
    )
  }
}

export default Stopwatch
