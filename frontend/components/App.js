import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'


export default class App extends React.Component {

  state = {
    todos: [],
    message: ''
  }
  componentDidMount() {
    axios.get(URL)
      .then(res => {
        console.log(res.data)
        this.setState({
          todos: res.data.data,
          message: res.data.message
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          message: `Oops! We couldn't find your todo list 🥲`
        })
      })
  }
  render() {
    return (
      <div className='App'>
        <h2>{this.state.message}</h2>
        {this.state.todos.map(todo => {
          const { id, name, completed } = todo
          return <p key={id}>{name} {completed ? '✔️' : ''}</p>
        })}
      </div>
    )
  }
}
