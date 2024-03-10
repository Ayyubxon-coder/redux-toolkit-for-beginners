import { useDispatch } from 'react-redux';
import { removeTodo } from '../../features/todoSlice';

export function TodoCard({ title, id }) {
  const dispatch = useDispatch();

  return (
    <div className='todo-card'>
      <h3>{title}</h3>
      <button
        style={{ backgroundColor: 'red' }}
        onClick={() => dispatch(removeTodo(id))}
      >
        Delete
      </button>
    </div>
  );
}
