import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <div>
        <ul className="todo-main">
          {
            todos.map(todo =>
              <Item deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.id} {...todo} />)
          }
        </ul>
      </div>
    )
  }
}
