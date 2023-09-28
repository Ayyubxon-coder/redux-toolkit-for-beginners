import { useDispatch } from 'react-redux';
import { removeTodo } from '../../features/todoSlice';

export function TodoCard({ title, description, id }) {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(removeTodo(id))} className='todo-card'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
