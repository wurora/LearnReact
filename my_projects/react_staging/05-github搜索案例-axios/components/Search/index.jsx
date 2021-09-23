import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    // 结构赋值连续形式，被取出的只有value(同时重命名为keyWord)
    const { keyWordElement: { value: keyWord },
      props: { updateState, isFirst } } = this

    if (!isFirst) updateState({ isFirst: false })
    updateState({ isLoading: true, err: '' })

    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        updateState({ users: response.data.items, isLoading: false });
      },
      err => {
        updateState({ err: err.message, isLoading: false });
      }
    )
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
