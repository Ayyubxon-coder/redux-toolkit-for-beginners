import React, { useState } from 'react';

export function TodoForm() {
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
  };

  return (
    <form onSubmit={handleAddTodo}>
      <div>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            value={todo.title}
            onChange={handleChange}
            type='text'
            name='title'
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
