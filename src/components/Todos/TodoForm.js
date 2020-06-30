import React from 'react';
import './styles.css';

const TodoForm = ({ onSubmit }) => (
  <>
  <h4>Agregar TODO <span role="img" aria-label='hook emoji'> 📋 ✍️</span></h4>
    <hr />
  <form onSubmit={onSubmit}>
    <input type='text'   className="form-control" />
    <button   className="btn btn-outline-primary mt-1 btn-block">
      Agregar
    </button>
  </form>
  </>
)

export default TodoForm
