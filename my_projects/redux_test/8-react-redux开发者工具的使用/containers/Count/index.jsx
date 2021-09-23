import React, { Component } from 'react'
// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/actions/count'


class Count extends Component {

  state = {

  }

  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const newValue = parseInt(value) + parseInt(this.props.count)
    if (newValue % 2 === 1)
      this.props.increment(value * 1)
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(parseInt(value), 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;

        <p>总人数: {this.props.persons.length}</p>
        <ul>
          {
            this.props.persons.map(person => (
              <li key={person.id}>
                <p>name: {person.name}</p>
                <p>age: {person.age}</p>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: state.count,
    persons: state.persons
  }),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
  }
)(Count)