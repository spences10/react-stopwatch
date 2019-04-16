import React, { useState, useRef } from 'react'
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

export const Stopwatch = () => {
  const [lapse, setLapse] = useState(0)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)

  const handleRunClick = () => {
    if (running) {
      clearInterval(intervalRef.current)
    } else {
      const startTime = Date.now() - lapse
      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime)
      }, 0)
    }

    setRunning(!running)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <label style={{ fontSize: '5em', display: 'block' }}>
        {lapse}ms
      </label>
      <Button onClick={handleRunClick}>
        {running ? 'Stop' : 'Start'}
      </Button>
      <Button>Clear</Button>
    </div>
  )
}
