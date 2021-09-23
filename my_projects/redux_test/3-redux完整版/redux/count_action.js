/* 
  该文件专门为Count组件生成action对象
  目的：便于管理的同时，防止拼写错误
*/
import { INCREMENT, DECREMENT } from "./constant"

export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDecrementAction = data => ({ type: DECREMENT, data })
