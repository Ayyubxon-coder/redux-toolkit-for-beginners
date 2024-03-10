import { useSelector } from 'react-redux';
import { TodoCard, TodoForm, Loading } from './components';

import './App.css';

function App() {
  const { todos } = useSelector((state) => state.todo);

  return (
    <div>
      <div className='container'>
        <TodoForm />
      </div>
      <div className='todo-list'>
        <Loading />
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
