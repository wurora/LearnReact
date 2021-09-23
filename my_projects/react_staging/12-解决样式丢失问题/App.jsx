import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import Header from './components/Header' // 直接使用是一般组件
import Home from './pages/Home' // 路由组件是通过路由使用，并且会收到一些props
import About from './pages/About'
import MyNavLink from './components/MyNavLink'
import './App.css'

export default class App extends Component {

  state = {
    routes: ['About', 'Home']
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中靠a跳转页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在react中靠路由链接实现 */}
              {/* activeClassName: 决定被选中时的样式 */}
              <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>

              <div>--------------use state----------------</div>
              {
                this.state.routes.map(route => <NavLink key={route} activeClassName="atguigu" className="list-group-item" to={`/${route.toLowerCase()}`}>{route}</NavLink>)
              }

              <div>------------use MyNavLink------------</div>
              <MyNavLink to="/atguigu/about" >About</MyNavLink>
              <MyNavLink to="/atguigu/home"  >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* Switch：第一次匹配到目标path就返回，若不加，会展示所有下的组件 */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Route path="/atguigu/about" component={About} />
                  <Route path="/atguigu/home" component={Home} />
                  <Route path="/atguigu/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
