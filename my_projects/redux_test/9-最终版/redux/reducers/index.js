import { combineReducers } from 'redux'

import count from './count'
import persons from './person'

// 汇总所有的reducer
export default combineReducers({
  count,
  persons,
})
