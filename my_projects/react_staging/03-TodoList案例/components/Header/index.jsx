import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Footer extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handelKeyUp = (e) => {
    // 结构赋值获取key,target
    const { key, target } = e
    if (key !== 'Enter') return

    let name = target.value.trim()
    if (name === '') {
      alert('输入不能为空')
      return
    }
    // 准备一个todo对象
    const todoObj = { id: nanoid(), name, done: false }
    this.props.addTodo(todoObj)
    target.value = ''
  }
  render() {
    return (
      <div>
        <div className="todo-header">
          <input onKeyUp={this.handelKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
        </div>
      </div>
    )
  }
}
