import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  background: transparent;
  color: ${props => props.theme.dark};
  border: 2px solid ${props => props.theme.dark};
  border-radius: 10px;
  &:hover {
    transform: translateY(-3px);
    transition: all 0.2s;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);
  }
`

const Label = styled.label`
  font-size: 4rem;
  margin: 2rem;
  background: transparent;
  color: ${props => props.theme.dark};
  text-align: center;
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
          this.setState({
            lapse: Date.now() - startTime
          })
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
    return (
      <div>
        <div>
          <Label>{lapse}ms</Label>
        </div>
        <div>
          <Button onClick={this.handleRunClick}>
            {running ? 'Stop' : 'Start'}
          </Button>
          <Button onClick={this.handleClearClick}>Clear</Button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
