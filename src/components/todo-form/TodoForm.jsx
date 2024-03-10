import React, { useState } from 'react';

export function TodoForm() {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setTodo(value);
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
            value={todo}
            onChange={handleChange}
            type='text'
            name='title'
            autoComplete='off'
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
          <button style={{ marginLeft: 20 }}>Get todos</button>
          <button style={{ marginLeft: 20, backgroundColor: 'red' }}>
            Clear todos
          </button>
        </div>
      </div>
    </form>
  );
}
