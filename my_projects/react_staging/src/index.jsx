// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'

import App from './App'


ReactDOM.render(
  (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ), document.querySelector('#root')
)
