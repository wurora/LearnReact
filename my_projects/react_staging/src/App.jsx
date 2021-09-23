import React, { Component } from 'react'
import { Button } from 'antd'
import { WechatOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <button>点我</button>&nbsp;
        <Button type="primary">好看版</Button>
        <WechatOutlined />
      </div>
    )
  }
}
