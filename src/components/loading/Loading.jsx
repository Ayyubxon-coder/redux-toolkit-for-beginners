import { useSelector } from 'react-redux';
import './loading.css';

export const Loading = () => {
  const { status } = useSelector((state) => state.todo);

  if (status === 'failed') {
    return <h1 style={{ color: 'red' }}>Fetch todos failed!</h1>;
  }

  if (status === 'loading') {
    return (
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return <></>;
};
