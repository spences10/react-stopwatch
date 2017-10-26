import React, { Component } from 'react'

import Counter from './Counter'
import Start from './Start'
import Clear from './Clear'

const state = { lapse: 0, running: false }

function setState(newState) {
  Object.assign(state, newState)
}

class Stopwatch extends Component {
  render() {
    return (
      <div>
        <div>
          <Counter lapse={state.lapse} />
        </div>
        <div>
          <Start running={state.running} />
          <Clear />
        </div>
      </div>
    )
  }
}

export default Stopwatch
