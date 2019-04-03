import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {

  getStyle = () => {
    return {

      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '3px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  MarkMe = (e) => {
    console.log(this.props)
  }

  render() {

    const { id, title } = this.props.todo
    return (

      <div style={this.getStyle()}>

        <p><input type='checkbox' onChange={this.props.markme.bind(this, id)} ></input>
          {title} <button style={styleBtn} onClick={this.props.deltodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markme: PropTypes.func.isRequired,
  deltodo: PropTypes.func.isRequired
}


const styleBtn = {
  background: '#f24537',
  borderRadius: '6px',
  cursor: 'pointer',
  color: '#ffffff',
  padding: '6px 9px'
}

export default Todoitem
