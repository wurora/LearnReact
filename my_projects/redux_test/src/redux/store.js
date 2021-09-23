/* 
  该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'

// 引入汇总之后的reducer
import reducer from './reducers'

// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

