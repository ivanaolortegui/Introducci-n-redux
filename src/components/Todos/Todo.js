import React from "react";

const Todo = ({ todo, updateTodo, deleteTodo }) => (
  <li className="list-group-item">
    <input
      type="checkbox"
      checked={todo.checked}
      onChange={() => {
        updateTodo(todo);
      }}
    />
    {todo.text}
    <button
      className="btn btn-danger"
      onClick={() => {
        deleteTodo(todo);
      }}
    >
      X
    </button>
  </li>
);

export default Todo;
