/* 
  1.该文件用于创建一个为Count组件服务的reducer，
    reducer的本质就是一个函数
  2.reducer函数会接到两个参数，
    分别是：
      1.之前的状态(preState)
      2.动作对象(action)
*/
import { INCREMENT, DECREMENT } from "./constant"

const initState = 0
export default function countReducer(preState = initState, action) {
  // 从action中获取type，data
  const { type, data } = action
  // 根据type决定如何加工数据
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default: break;
  }
  return preState;
}