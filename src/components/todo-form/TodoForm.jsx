import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todoSlice';

export function TodoForm() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.title.trim() !== '' && todo.description.trim() !== '') {
      dispatch(addTodo(todo));
      setTodo({
        title: '',
        description: '',
      });
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <div>
        <div>
          <label htmlFor='title'>Name</label>
          <input
            value={todo.title}
            onChange={handleChange}
            type='text'
            name='title'
            autoComplete='off'
          />
        </div>
        <div>
          <label htmlFor='description'>Email </label>
          <input
            value={todo.description}
            onChange={handleChange}
            type='text'
            name='description'
            autoComplete='off'
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  );
}
