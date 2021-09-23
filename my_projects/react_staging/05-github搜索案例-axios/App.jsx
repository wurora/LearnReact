import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  updateState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div>
        <div className="container">
          <Search updateState={this.updateState} />
          <List users={users} isFirst={isFirst} isLoading={isLoading} err={err} />
        </div>
      </div>
    )
  }
}
