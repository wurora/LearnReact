import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addPerson } from '../../redux/actions/person'

class Person extends Component {

  addClick = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    if (name.trim() === '' || parseInt(age) <= 0) return
    this.props.addPerson({ id: nanoid(), name, age })
  }

  render() {
    return (
      <div>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />&nbsp;
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />&nbsp;
        <button onClick={this.addClick}>添加</button>
        <h2>Count: {this.props.count}</h2><br />

        <ul>
          {
            this.props.persons.map(person => (
              <li key={person.id}>
                <p>id: {person.id}</p>
                <p>name: {person.name}</p>
                <p>age: {person.age}</p>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    persons: state.persons,
    count: state.count
  }),
  {
    addPerson
  }
)(Person)