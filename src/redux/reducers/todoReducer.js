import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/todoAction";

const initialState = {
  /*     todos: [
         {
             text: 'Crear componentes',
             id: '12345',
             checked: false
         }
     ]  */
  todos: []
}


const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          action.payload,
          ...state.todos
        ]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload.id
        })
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload.id === todo.id)
            return {
              ...todo,
              checked: !todo.checked
            }
          return todo;
        })
      }

    default:
      return state
  }


}

export default todo;