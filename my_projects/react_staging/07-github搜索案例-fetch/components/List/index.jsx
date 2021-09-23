import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('atguigu', (msg, data) => {
      this.setState(data)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isLoading, isFirst, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用</h2> :
            isLoading ? <h2>正在读取</h2> :
              err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                users.length ? users.map(user =>
                  <div className="card" key={user.id}>
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                      <img alt="portrait" src={user.avatar_url} style={{ width: '100px' }} />
                    </a>
                    <p className="card-text">{user.login}</p>
                  </div>
                ) : <h2>没有与这个名字关联的用户</h2>
        }
      </div>
    )
  }
}
