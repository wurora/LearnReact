import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  search = async () => {
    PubSub.publish('atguigu', { name: 'tom', age: 18 })

    // 结构赋值连续形式，被取出的只有value(同时重命名为keyWord)
    const { keyWordElement: { value: keyWord } } = this

    PubSub.publish('atguigu', { isFirst: false, isLoading: true, err: '' })

    //#region 
    // 用axios发送网络请求
    // axios.get(`/api1/search/users?q=${keyWord}`).then(
    //   response => {
    //     PubSub.publish('atguigu', { users: response.data.items, isLoading: false });
    //   },
    //   err => {
    //     PubSub.publish('atguigu', { err: err.message, isLoading: false });
    //   }
    // )
    //#endregion

    // 用fetch发送请求(未优化)
    // fetch(`/api1/search/users?q=${keyWord}`).then(
    //   res => {
    //     console.log('成功联系到服务器', res);
    //     return res.json()
    //   }).then(
    //     res => {
    //       console.log('获取数据成功', res)
    //     }
    //   ).catch(err => {
    //     console.log('请求失败', err)
    //   })

    // 用fetch发送请求(优化)
    try {
      const response = await fetch(`/api1/search/users?q=${keyWord}`)
      const data = await response.json()
      console.log(data)
      PubSub.publish('atguigu', { users: data.items, isLoading: false });
    }
    catch (err) {
      console.log('error', err)
      PubSub.publish('atguigu', { err: err.message, isLoading: false });
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
