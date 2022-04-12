import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <input 
        type='text'
        value={this.props.value}
        onChange={Function.prototype}
        />
        <button>Add Todo</button>
      </div>
    )
  }
}
