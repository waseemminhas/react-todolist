import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title:''
    }

    onChange =(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }

onSubmit = (e)=>
{
   e.preventDefault();
   this.setState({title:' '});
   this.props.addTodo(this.state.title);
   
}

  render() {
    return (
      
        
             <form onSubmit={this.onSubmit} style= {{ display:'flex' }}>
                 <input type='text' style={{flex:'10' , padding:'10px'}}
                 name="title"
                 value={this.state.value}
                 placeholder='Add Todo..'
                 onChange={this.onChange}
                 
                 
                 />
                 <input type='submit' className='btn' value='Submit to Add' />
             </form>
         
      
    )
  }
}



AddTodo.propTypes = {

  addTodo: PropTypes.func.isRequired
}

export default AddTodo
