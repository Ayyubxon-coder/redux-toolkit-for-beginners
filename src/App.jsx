import { TodoCard, TodoForm } from './components';

import './App.css';
const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
];

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
