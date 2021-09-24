import React, { Component, PureComponent } from 'react'

export default class Parent extends PureComponent {
  render() {
    return (
      <div>
        <h2>这里是Parent</h2>
        <Child render={name => <Child2 name={name} />} />
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    return (
      <div>
        <h2>这里是child</h2>
        {this.props.render('这是一个插槽')}
      </div>
    )
  }
}

class Child2 extends Component {
  render() {
    return (
      <div>
        <h2>这里是后代,{this.props.name}</h2>
      </div>
    )
  }
}
