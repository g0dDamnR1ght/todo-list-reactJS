import React from 'react';
import './App.css';
import List from './TodoListItems/List'
import Form from './Form/FormGroup'
import ListItem from './TodoListItems/ListItem';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {todos: [], todo: { defaultValue: '', id: Date.now().toString(), isDone: false} }; 

    this.addTODO = this.addTODO.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.completeTODO = this.completeTODO.bind(this)
    this.deleteTODO = this.deleteTODO.bind(this)
  }
  
  handleChange(title) {
    
    this.setState( state => ({ todo: {
        defaultValue: title,
        id: state.todos.length + Math.random(), 
        isDone: false
        }
      })
    )
  }

  // что бы не добавлялось 2жды нужно было создать дубликат массива, запушить в него айтем, и в сэтстейте переопределить его. Как до этого додуматься ?

  addTODO (){
    let todos = this.state.todos.concat()

    todos.push(this.state.todo)

    this.setState( {todos})
    this.setState( {todo: { 
      ...this.state.todo, 
      defaultValue: ``
       }
      })
    console.log(this.state.todos)
    console.log(this.state.todo);
    
  }
  
  completeTODO(todos){
    this.setState( {todos})
    console.log(this.state.todos);
  }

  deleteTODO(todos) {
    this.setState({todos})
    console.log(this.state.todos);
  }

  render() {
  let title = this.state.todo.defaultValue
  let todos = this.state.todos

    return(
      <div className="container">
        <Form todos={todos}
              name={title}
              addTODO={this.addTODO}
              onHandleChange={this.handleChange}/>
        <List todos={todos}
              name={title}
              completeHandler={this.completeTODO}
              deleteHandler={this.deleteTODO} />
      </div>
    )
    }
}

export default App;
