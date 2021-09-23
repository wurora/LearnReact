import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink replace to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink replace to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home/message" component={Message} />
          <Route path="/home/news" component={News} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    )
  }
}
