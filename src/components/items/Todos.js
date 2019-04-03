/*jshint esnext: true */
import React, { Component } from 'react';
import { Todoitem } from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {

    return (
      this.props.todos.map(todo =>

        <Todoitem key={todo.id} todo={todo} markme={this.props.markme} deltodo={this.props.deltodo} />
      ));
  }
}

Todos.propTypes = {

  todos: PropTypes.array.isRequired,
  markme: PropTypes.func.isRequired,
  deltodo: PropTypes.func.isRequired
}


export default Todos;
