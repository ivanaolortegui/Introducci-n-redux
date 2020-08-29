import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


import './styles.css';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { AddTodo } from '../../redux/actions/todoAction';


const Todos = () => {
  const {todos} = useSelector(state => state.todo)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.target[0].value
    dispatch(AddTodo({
      text,
      id: new Date().getTime(),
      checked: false
    }))
    e.target[0].value = ''
  }

  return (
    <div>
      <h1> Todo </h1>
      <div className="row">
        <div className="col-7">
          <TodoList todos= {todos}/>
        </div>

        <div className="col-5">
          <TodoForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}


export default Todos