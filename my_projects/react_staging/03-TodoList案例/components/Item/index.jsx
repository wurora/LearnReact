import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {

  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  state = {
    mouse: false
  }

  // 鼠标移入移出的回调
  handleMouse = (flag) => {
    return (e) => {
      this.setState({ mouse: flag })
    }
  }

  // 勾选、取消某一个todo的回调
  handelCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked)
    }
  }

  handleDelete = (id) => {
    if (window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <div>
        <li style={{ backgroundColor: mouse ? '#ddd' : '#fff' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            <input onChange={this.handelCheck(id)} type="checkbox" checked={done} />
            <span>{name}</span>
          </label>
          <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
        </li>
      </div>
    )
  }
}
