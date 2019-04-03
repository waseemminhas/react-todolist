
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/items/Header'
import about from './components/pages/about';
import AddTodo from './AddTodo';
import Todos from './components/items/Todos';
import contactus from './components/pages/contactus';




class App extends Component {

  state = {
    todos: [/*{
      id: uuid.v4(),
      tile: 'Meet the Boss 1',
      completed: false
    },
    {
      id: uuid.v4(),
      tile: 'Meet the Boss 2',
      completed: false
    },
    {
      id: uuid.v4(),
      tile: 'Meet the Boss 3',
      completed: false
    }
  */]
  }

  markme = (id) => {

    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })

  }

  deltodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] }))

  }

  addTodo = (title) => {

    // const newTodo = {
    //   title: title ,
    //   id: uuid.v4(),
    //   completed: false
    // }

    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10', {
      title: title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));


  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }))
  }
  render() {

    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              < AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markme={this.markme.bind(this)} deltodo={this.deltodo} />
            </React.Fragment>
          )} />

          <Route path='/about' component={about} />
          <Route path="/contactus" component={contactus} />

        </div>
      </Router>
    );
  }
}

export default App;