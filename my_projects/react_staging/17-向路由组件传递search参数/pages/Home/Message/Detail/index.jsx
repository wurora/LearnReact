import React, { Component } from 'react'
import { parseObj } from '../../../../js/utilities'

const data = [
  { id: '01', content: '你好1111111111' },
  { id: '02', content: '你好2222222222' },
  { id: '03', content: '你好3333333333' },
]
const mapData = {
  '01': { content: '你好1111111111' },
  '02': { content: '你好2222222222' },
  '03': { content: '你好3333333333' }
}
export default class Detail extends Component {
  render() {
    // 接收params参数
    // const { id, title } = this.props.match.params
    // const findResult = data.find(i => i.id == id)

    // 接收search参数
    const { search } = this.props.location
    const { id, title } = parseObj(search)

    const findResult = mapData[id]
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
      </div>
    )
  }
}
