// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入Router
import { BrowserRouter } from 'react-router-dom'

import App from './App'


ReactDOM.render(
  (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  ), document.querySelector('#root')
)
