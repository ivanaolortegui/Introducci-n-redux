import React from 'react'
import Todo from './Todo'


const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <ul className="list-group list-group-flush">
    { todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </ul>
)

export default TodoList
