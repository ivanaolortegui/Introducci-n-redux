import React,  {  useEffect } from 'react'
import { connect } from 'react-redux'
import { addTodo, updateTodo, deleteTodo } from '../../redux/actions/todoActions'
import { getId } from '../../utils'
import './styles.css';
import TodoForm from './TodoForm'
import TodoList from './TodoList'


const Todos = ({ todo, addTodo, updateTodo, deleteTodo }) => {
console.log(todo);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todo.todos));
}, [todo.todos]);

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = e.target[0].value

    addTodo({
      text,
      checked: false,
      id: getId()
    })

    e.target[0].value = ''
  }

  return (
    <div>
       <h1> Todo ({todo.todos.length})</h1>
       <div className="row">

         <div className="col-7">
         <TodoList
        todos={todo.todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
         </div>

         <div className="col-5">
         <TodoForm onSubmit={handleSubmit} />
         </div>
       </div>
    
   
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)