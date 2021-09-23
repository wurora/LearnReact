// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'

import App from './App'
import store from './redux/store'

ReactDOM.render(
  (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ), document.querySelector('#root')
)

store.subscribe(() => {
  ReactDOM.render(
    (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ), document.querySelector('#root')
  )
})