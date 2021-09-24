import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    // users:[1,2,3],
    users: 'abc',
  }
  render() {
    return (
      <div>
        {this.state.users.map(i => i)}
      </div>
    )
  }
}
