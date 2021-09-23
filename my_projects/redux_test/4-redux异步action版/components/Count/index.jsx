import React, { Component } from 'react'
// 引入store，用于在redux中获取状态
import store from '../../redux/store'
// 引入actionCreator，用于创建action对象
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

export default class Count extends Component {

  state = {

  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.forceUpdate()
  //   })
  // }

  increment = () => {
    const { value } = this.selectNumber
    store.dispatch(createIncrementAction(parseInt(value)))
  }
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(parseInt(value)))
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState();
    const newValue = count + parseInt(value);
    if (newValue % 2 !== 0) {
      store.dispatch(createIncrementAction(parseInt(value)))
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(parseInt(value), 500))
    }, 1000);
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
