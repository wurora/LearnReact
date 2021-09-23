import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 全选checkbox的回调
  handleCheckAll = (e) => {
    console.log(e.target.checked)
    this.props.handleCheckAll(e.target.checked)
  }

  // 清除已完成任务的回调
  handleClearDone = () => {
    this.props.clearDone()
  }

  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((prev, cur) => prev + (cur.done ? 1 : 0), 0)
    return (
      <div>
        <div className="todo-footer">
          <label>
            <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === todos.length && doneCount !== 0} />
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{todos.length}
          </span>
          <button onClick={this.handleClearDone} className="btn btn-danger">清除已完成任务</button>
        </div>
      </div>
    )
  }
}
