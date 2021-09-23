import React, { Component } from "react";
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// 创建外壳组件
export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里

  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '逛街', done: true },
    ]
  }

  // 增加一个todo对象
  addTodo = (todoObj) => {
    const { todos } = this.state
    this.setState({ todos: [todoObj, ...todos] })
  }

  // 更新一个todo对象
  updateTodo = (id, done) => {
    const { todos } = this.state
    for (let todo of todos) {
      if (todo.id === id) {
        todo.done = done
        break;
      }
    }
    this.setState({ todos })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => todo.id !== id)
    this.setState({ todos: newTodos })
  }

  handleCheckAll = (value) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo => {
        todo.done = value
        return todo
      })
    })
  }

  clearDone = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.done)
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} todos={todos} />
            <Footer clearDone={this.clearDone} handleCheckAll={this.handleCheckAll} todos={todos} />
          </div>
        </div>
      </div>
    )
  }
}

