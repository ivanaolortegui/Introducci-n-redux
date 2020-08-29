import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/actions/todoAction";

const Todo = ({ todo }) => {
const dispatch = useDispatch()
  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={()=> {
          dispatch(updateTodo(todo));
        }}
      />
      {todo.text}
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch(deleteTodo(todo))
        }}
      >
        X
    </button>
    </li>
  )

}

export default Todo;
