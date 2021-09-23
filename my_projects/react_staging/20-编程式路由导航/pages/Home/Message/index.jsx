import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import Detail from './Detail'

export default class Message extends Component {

  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ]
  }

  replaceShow = (id, title) => {
    // replace跳转携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    // replace跳转携带query参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    // replace跳转携带state参数
    this.props.history.replace(`/home/message/detail`, { id, title })
  }
  pushShow = (id, title) => {
    // push跳转携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    // push跳转携带query参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

    // push跳转携带state参数
    this.props.history.push(`/home/message/detail`, { id, title })
  }
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  go = () => {
    this.props.history.go(-1)
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageArr.map(i =>
            (
              <li key={i.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/home/message/detail/${i.id}/${i.title}`}>{i.title}</Link>&nbsp;&nbsp; */}

                {/* 向路由组件传递search参数 */}
                <Link to={`/home/message/detail/?id=${i.id}&title=${i.title}`}>{i.title}</Link>&nbsp;&nbsp;

                {/* 向路由组件传递state参数 */}
                {/* <Link to={{ pathname: '/home/message/detail', state: { id: i.id, title: i.title } }}>{i.title}</Link>&nbsp;&nbsp; */}


                {/* 编程式路由跳转 */}
                &nbsp;<button onClick={() => this.pushShow(i.id, i.title)}>push查看</button>
                &nbsp;<button onClick={() => this.replaceShow(i.id, i.title)}>replace查看</button>
              </li>
            ))
          }
        </ul>
        <hr />
        <Switch>
          {/* 声明接收params参数 */}
          {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

          {/* search无需声明接收 */}
          {/* <Route path="/home/message/detail" component={Detail} /> */}

          {/* state无需声明接收 */}
          <Route path="/home/message/detail" component={Detail} />

        </Switch>
        <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.go}>go</button>&nbsp;
      </div>
    )
  }
}
