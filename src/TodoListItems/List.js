import React from "react"; 
import ListItem from './ListItem'; 
import EmptyTemplate from "./EmptyTemplate";


class List extends React.Component{
  constructor(props){
    super(props)

  }

  completeHandler(id) { 
    let todos = this.props.todos.concat()
    
    const todo = todos.find( t => t.id === id)

    todo.isDone = !todo.isDone
      this.props.completeHandler(todos); 
  }

  deleteHandler(id){
    let todos = this.props.todos.concat()

   const todo = todos.find( (todo, i) => todo.id === id)
   const i = todos.findIndex( todo => todo.id === id)
      console.log(todo);
      
    todos.splice(i, 1)
    this.props.deleteHandler(todos);
  }

  renderListItem() {  
    return  this.props.todos.map ( todo => {
      return(
        <ListItem 
        key={todo.id.toString()} 
        title={todo.defaultValue}
        isDone={todo.isDone}
        completeHandler={this.completeHandler.bind(this, todo.id)}
        deleteHandler={this.deleteHandler.bind(this, todo.id)} />
        ) }) 
  }

  render(){
    return(
      <div className="list">
     
      <ul className="list-group">
        {
          this.props.todos.length ? this.renderListItem() : <EmptyTemplate/>
        }
       
      </ul>
    </div>
    )
  }
}

export default List