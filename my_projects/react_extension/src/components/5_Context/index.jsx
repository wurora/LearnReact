import React, { Component } from 'react'

// 创建Context对象
const MyContext = React.createContext()
export default class A extends Component {
  state = { username: 'A' }
  render() {
    return (
      <div>
        <h3>A组件： {this.state.username}</h3>
        <MyContext.Provider value={{ username: this.state.username, age: 19 }}>
          <B />
        </MyContext.Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h3>B组件</h3>
        <h3> {this.props.username}</h3>
        <C />
      </div>
    )
  }
}

// class C extends Component {
//   static contextType = MyContext
//   render() {
//     return (
//       <div>
//         <h3>C组件</h3>
//         <h3>{this.context.username},{this.context.age}</h3>
//       </div>
//     )
//   }
// }

function C() {

  return (
    <div>
      <h3>C组件</h3>
      <MyContext.Consumer>
        {
          value => (<h3>{value.username},{value.age}</h3>)
        }

      </MyContext.Consumer>
    </div>
  )
}
