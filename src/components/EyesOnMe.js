import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    
  render = () => (
    <div>
      <button
        onFocus={() => console.log('Good!')}
        onBlur={() => console.log('Hey! Eyes on me!')}
      >
        button
      </button>
    </div>
  )
}
