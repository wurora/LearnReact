// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

/* 
  用于传递状态
*/
const mapStateToProps = (state) => ({
  count: state
})
const mapDispatchToProps = (dispatch) => ({
  increment: (value) => {
    dispatch(createIncrementAction(value))
  },
  decrement: (value) => {
    dispatch(createDecrementAction(value))
  },
  incrementAsync: (value, time) => {
    dispatch(createIncrementAsyncAction(value, time))
  },
})


// 创建并暴露一个Count容器组件
// 第一个括号需要两个函数类型的参数：
// 1.返回状态对象作为组件的props
// 2.返回操作状态的方法作为props
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)