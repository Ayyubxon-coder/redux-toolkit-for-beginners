import { TodoCard, TodoForm } from './components';

import './App.css';
const todos = [];

function App() {
  return (
    <div>
      <div className='container'>
        <TodoForm />
      </div>
      <div className='todo-list'>
        {todos?.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
