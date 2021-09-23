import React, { Component } from 'react'

export default class Demo extends Component {

  state = {
    count: 0
  }

  add = () => {
    // 对象式的setState
    const { count } = this.state
    this.setState({ count: count + 1 }, () => {
      console.log(this.state.count)
    })

    // 函数式的setState
    this.setState(state => ({ count: state.count + 1 }))
  }

  render() {
    return (
      <div>
        count: {this.state.count}
        <button onClick={this.add}>加1</button>
      </div>
    )
  }
}
