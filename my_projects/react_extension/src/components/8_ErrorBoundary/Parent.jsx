import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = { hasError: '' }

  // 当子组件报错的时候，会触发，并携带错误信息
  static getDerivedStateFromError(e) {
    console.log(e)
    return { hasError: e }
  }

  componentDidCatch(e) {
    // 用于统计错误，反馈给服务器，通知编码人员进行bug的解决
    console.log('渲染出错', e)
  }
  render() {
    return (
      <div>
        <h2>是Parent组件</h2>
        {this.state.hasError ? <h2>网络不稳定</h2> : <Child />}
      </div>
    )
  }
}
