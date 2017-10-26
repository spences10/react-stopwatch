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
  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - state.lapse
        this.timer = setInterval(() => {
          this.setState(
            {
              lapse: Date.now() - startTime,
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

  render() {
    return (
      <Button onClick={this.handleRunClick}>
        {this.props.running ? 'Stop' : 'Start'}
      </Button>
    )
  }
}

export default Start
