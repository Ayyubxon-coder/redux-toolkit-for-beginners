import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, fetchTodos } from '../../features/todoSlice';

export function TodoForm() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <div>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            value={todo}
            onChange={handleChange}
            type='text'
            name='title'
            autoComplete='off'
          />
        </div>
        <div>
          <button disabled={!todo} type='submit'>
            Submit
          </button>
          <button
            style={{ marginLeft: 20 }}
            onClick={() => dispatch(fetchTodos())}
          >
            Get todos
          </button>
        </div>
      </div>
    </form>
  );
}
