import { increment, decrement, incrementByAmount } from '../stores/counter';
import { useDispatch } from 'react-redux';

function CounterActions({ count, setCount }) {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <button onClick={() => dispatch(increment())}>Arttır</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>4 arttır</button>
    </>
  );
}

export default CounterActions;
