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
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  ), document.querySelector('#root')
)