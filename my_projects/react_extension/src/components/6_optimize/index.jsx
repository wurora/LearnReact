import React, { PureComponent } from 'react'

export default class Parent extends PureComponent {
  state = { carName: '123', stu: [1, 2, 3] }
  changeCar = () => {
    this.setState({ carName: '2222' })
  }
  add = () => {
    this.state.stu.push(4)
    this.forceUpdate()
  }
  render() {
    console.log('parent render')
    return (
      <div>
        <h2>这里是Parent</h2>
        <button onClick={this.changeCar}>换车</button>
        <button onClick={this.add}>叫人</button>
        <p>{this.state.stu}</p>
        <Child carName="奥拓" />
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    console.log('child render')
    return (
      <div>
        <h2>这里是child</h2>
        <h2>{this.props.carName}</h2>
      </div>
    )
  }
}
