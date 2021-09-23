// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'

import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  (
    <React.StrictMode>
      {/* 用provider包裹App的目的是让App所有的后代容器组件都能收到store */}
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  ), document.querySelector('#root')
)