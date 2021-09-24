import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// class Demo extends Component {
//   myRef = React.createRef()
//   state = {
//     count: 0,
//     timer: null,
//   }
//   increment = () => {
//     this.setState(state => ({ count: state.count + 1 }))
//   }
//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
//   }
//   show = () => {
//     console.log(this.myRef.current.innerHTML)
//   }
//   componentDidMount() {
//     this.state.timer = setInterval(() => {
//       this.setState({ count: this.state.count + 1 })
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.state.timer)
//   }
//   render() {
//     return (
//       <div>
//         <h2 ref={this.myRef}>Count:{this.state.count}</h2>
//         <button onClick={this.increment}>点我+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>提示数据</button>
//       </div>
//     )
//   }
// }

// 函数式组件
function Demo() {
  const [count, setCount] = React.useState(0)
  const myRef = React.useRef()

  function increment() {
    // setCount(count + 1) // 第一种写法
    setCount(count => count + 1)
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  function hint() {
    console.log(myRef.current.innerHTML)
  }

  return (
    <div>
      <h2 ref={myRef}>Count:{count}</h2>
      <button onClick={increment}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={hint}>点我提示</button>
    </div>
  )
}

export default Demo